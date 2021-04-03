import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WefinexCommandService, WefinetComand } from 'src/app/services/wefinex-command.service';
import { WefinexResultService, WefinexResult } from 'src/app/services/wefinex-result.service';
import { interval, Subject, timer } from 'rxjs';
import { takeUntil, timeInterval, timeout } from 'rxjs/operators';
import AudioTouchUnlock from './audio-touch-unblock';
import { Profit, WefinexTotalAmountService } from 'src/app/services/wefinex-total-amount.service';
import { AuthService, User } from 'src/app/services/auth.service';
import { SettingComponent } from './modal/setting/setting.component';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { HistoryComponent } from './modal/history/history.component';
import { ChartWefinexComponent } from './modal/chart-wefinex/chart-wefinex.component';
import { FollowBetManuallyService } from 'src/app/services/follow-bet-manually.service';
@Component({
  selector: 'app-wefinex',
  templateUrl: './wefinex.component.html',
  styleUrls: ['./wefinex.component.scss'],
})
export class WefinexComponent implements OnInit, AfterViewInit, OnDestroy {
  mapType = { G: { b: '#fee4cb', t: '#ff942e', f: 'MUA' }, T: { b: '#c8f7dc', t: '#34c471', f: 'BÁN' } };
  mapResult = { THUA: 'Lose', THANG: 'WIN' };
  result: WefinexResult[];
  current: WefinetComand;
  soundOn: boolean = window.localStorage.getItem('soundLive') !== 'false';
  profit = 0;
  buget = 0;
  totalAmount = 0;
  totalWin = 0;
  menuActive = 'HOME';
  user: User;
  private ngUnsubscribe = new Subject();
  constructor(@Inject(DOCUMENT) private document: Document, private wefinexCommandService: WefinexCommandService,
              private wefinexResultService: WefinexResultService, private wefinexTotalAmountService: WefinexTotalAmountService,
              public auth: AuthService,
              public modalController: ModalController,
              public loadingController: LoadingController,
              public alertController: AlertController,
              public followBetManuallyService: FollowBetManuallyService) {
    this.wefinexResultService.getListByCondition((ref) => ref.orderBy('lastUpdate', 'desc').limit(17)).subscribe((k) => {
      this.result = k;
    });
    let d = new Date();
    let hours = String(d.getHours()).padStart(2, '0');
    let minute = String(d.getMinutes()).padStart(2, '0');

    let day = String(d.getDate()).padStart(2, '0');
    let month = String(d.getMonth() + 1).padStart(2, '0');
    let year = d.getFullYear();
    this.wefinexTotalAmountService.get(`${day}:${month}:${year}`).subscribe((data) => {
      console.log(data);
      this.buget = Number(data.budget);
      this.totalAmount = Number(data.totalAmount);
      this.profit = (Number(data.profit) / Number(data.budget)) * 100;
      this.totalWin = Number(this.totalAmount) - Number(this.buget);
    });
    this.wefinexCommandService.get('command').subscribe((data) => {
      d = new Date();
      hours = String(d.getHours()).padStart(2, '0');
      minute = String(d.getMinutes()).padStart(2, '0');
      day = String(d.getDate()).padStart(2, '0');
      month = String(d.getMonth() + 1).padStart(2, '0');
      year = d.getFullYear();
      const datePlace = data.time.split(' ')[0];
      const timePlace = data.time.split(' ')[1];
      const currentTime = `${day}:${month}:${year} ${hours}:${minute}`;
      console.log(currentTime);
      console.log(data.time);
      if (currentTime === data.time) {
        this.current = data;
        this.playSound(`assets/wefinex/sounds/${this.current.type}.mp3`);
        const time = timer((60 - new Date().getSeconds()) * 1000);
        time.subscribe((_) => {
          this.current = undefined;
        });
        interval(500).pipe(takeUntil(time))
          .subscribe(
            value => {
              this.current['countDown'] = Math.max(60 - new Date().getSeconds(), 0);
              this.current['percent'] = Number(parseFloat((((60 - this.current['countDown']) / 60) * 100) + '').toFixed(2));
            },
            err => this.current = undefined
          );
      } else {
        this.playSound(`assets/wefinex/sounds/warning.mp3`);
        this.current = undefined;
      }
    });
  }
  initSound() {
    if (!this.soundOn) return;
    const audio = new Audio(`assets/wefinex/sounds/ping.mp3`);
    audio.muted = true;
    const alert_elem = document.querySelector('#trigger-volume');
    audio.play().then(() => {
      this.soundOn = true;
      window.localStorage['soundLive'] = this.soundOn;
    })
      .catch(() => {
        this.soundOn = false;
        window.localStorage['soundLive'] = this.soundOn;
        alert_elem.addEventListener('click', () => {
          audio.play()
            .then();
          this.soundOn = true;
          window.localStorage['soundLive'] = this.soundOn;
        });
      });
  }
  clickIconVolume(): void {
    this.soundOn = !this.soundOn;
    window.localStorage['soundLive'] = this.soundOn;

  }
  ngOnDestroy(): void {
    AudioTouchUnlock.onDestroy();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  switchMode() {
    const modeSwitch = this.document.querySelector('.mode-switch');
    this.document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  }
  ngAfterViewInit(): void {
    this.initSound();

    const listView = this.document.querySelector('.list-view');
    const gridView = this.document.querySelector('.grid-view');
    const projectsList = this.document.querySelector('.project-boxes');
    listView.addEventListener('click', () => {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    gridView.addEventListener('click', () => {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    this.document.querySelector('.messages-btn').addEventListener('click', () => {
      this.document.querySelector('.messages-section').classList.add('show');
    });
    this.document.querySelector('.messages-close').addEventListener('click', () => {
      this.document.querySelector('.messages-section').classList.remove('show');
    });
    if(this.mobileCheck()) {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    }
  }
  mobileCheck() {
    let check = false;
    ((a) => {if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window['opera']);
    return check;
  };
  trackByFn(index, item) {
    return item.id;
  }

  ngOnInit() {
      this.auth.user$.subscribe( z => {
        this.user = z ;
    });
    AudioTouchUnlock.onInit();
  }
  playSound(url: string): void {
    if (this.soundOn) {
      AudioTouchUnlock.play(url);
    }
  }
  async setting() {
    if (!this.user) {
    const isLogin = confirm('Vui lòng đăng nhập');
    if (isLogin) {
      try {
        const user = await this.auth.googleSignIn();
      } catch ( e) {
        return;
      }
     }
    }
    this.presentLoading();
    const modal = await this.modalController.create({
      component: SettingComponent,
      cssClass: 'wefinex-setting-modal-custom-class',
      componentProps: {
          product: {amount: this.user.doubly,
             email: this.user.email,
             isFollow: this.user.auto,
             followByCommand: this.user.followByCommand,
             uid: this.user.uid}
      }
  });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if ( data && typeof data === 'object'){
          console.log(data);
   }
  }
  async history() {
    if (!this.user) {
      const isLogin = confirm('Vui lòng đăng nhập');
      if (isLogin) {
        try {
          const user = await this.auth.googleSignIn();
        } catch ( e) {
          return;
        }
       }
      };
      this.presentLoading();
    const modal = await this.modalController.create({
      component: HistoryComponent,
      cssClass: 'wefinex-history-modal-custom-class',
      componentProps: {
          product: {amount: 5, email: this.user.email, isFollow: false}
      }
  });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if ( data && typeof data === 'object'){
          console.log(data);
   }
  }
  async chartWefinex() {
    if (!this.user) {
      const isLogin = confirm('Vui lòng đăng nhập');
      if (isLogin) {
        try {
          const user = await this.auth.googleSignIn();
          console.log(user);
        } catch ( e) {
          return;
        }
       }
      };
      this.presentLoading();
    const modal = await this.modalController.create({
      component: ChartWefinexComponent,
      cssClass: 'wefinex-history-modal-custom-class',
      componentProps: {
          data: {}
      }
  });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if ( data && typeof data === 'object'){
          this.followBetManuallyService.addComandByUser(this.user.uid, data.data.stake, data.data.type);
   }
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 100,
      mode: 'ios',
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  addUserFollow() {
    // tslint:disable-next-line:max-line-length
    alert(`Liện hệ quản trị viên qua sdt 098 177 3084 để được hỗ trợ`);
}
onIonRefresh($event) {
  window.location.reload();
}
async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: 'Bạn có muốn <strong>Đăng xuất</strong>!!!',
    mode: 'ios',
    buttons: [
      {
        text: 'Không',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Có',
        handler: () => {
          this.auth.signOut();
          console.log('Confirm Okay');
        }
      }
    ]
  });
  await alert.present();
  }
}
