import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { WefinetComand, WefinexCommandService } from 'src/app/services/wefinex-command.service';
import { WefinexResult, WefinexResultService } from 'src/app/services/wefinex-result.service';
import { WefinexTotalAmountService } from 'src/app/services/wefinex-total-amount.service';
import AudioTouchUnlock from '../../audio-touch-unblock';

@Component({
  selector: 'app-wifinex-home',
  templateUrl: './wifinex-home.component.html',
  styleUrls: ['./wifinex-home.component.scss'],
})
export class WifinexHomeComponent  implements OnInit, AfterViewInit, OnDestroy {

  mapType = { G: { b: '#fee4cb', t: '#ff942e', f: 'Giảm' }, T: { b: '#c8f7dc', t: '#34c471', f: 'Tăng' } };
  mapResult = { THUA: 'Lose', THANG: 'WIN' };
  result: WefinexResult[];
  current: WefinetComand;
  soundOn: boolean = window.localStorage.getItem('soundLive') !== 'false';
  profit = 0;
  buget = 0;
  totalAmount = 0;
  totalWin = 0;
  constructor(@Inject(DOCUMENT) private document: Document, private wefinexCommandService: WefinexCommandService,
              private wefinexResultService: WefinexResultService, private wefinexTotalAmountService: WefinexTotalAmountService,
              private authService: AuthService) {
    this.wefinexResultService.getListByCondition((ref) => ref.orderBy('lastUpdate', 'desc').limit(17)).subscribe((k) => {
      this.result = k;
    });
    const d = new Date();
    const hours = String(d.getHours()).padStart(2, '0');
    const minute = String(d.getMinutes()).padStart(2, '0');

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    this.wefinexTotalAmountService.get(`${day}:${month}:${year}`).subscribe((data) => {
      console.log(data);
      this.buget = Number(data.budget);
      this.totalAmount = Number(data.totalAmount);
      this.profit = (Number(data.profit) / Number(data.budget)) * 100;
      this.totalWin = Number(this.totalAmount) - Number(this.buget);
    });
    this.wefinexCommandService.get('command').subscribe((data) => {

      const datePlace = data.time.split(' ')[0];
      const timePlace = data.time.split(' ')[1];
      const currentTime = `${day}:${month}:${year} ${hours}:${minute}`;
      console.log(currentTime);
      console.log(data.time)
      if (currentTime === data.time) {
        this.current = data;
        this.playSound(`assets/wefinex/sounds/${this.current.type}.mp3`);
        const time = timer((60 - new Date().getSeconds()) * 1000);
        time.subscribe((d) => {
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

    })
  }
  initSound() {
    if (!this.soundOn) { return; }
    const audio = new Audio(`assets/wefinex/sounds/warning.mp3`);
    audio.muted = true;
    const alertElem = document.querySelector('#trigger-volume');
    audio.play().then(() => {
      this.soundOn = true;
      window.localStorage['soundLive'] = this.soundOn;
    })
      .catch(() => {
        this.soundOn = false;
        window.localStorage['soundLive'] = this.soundOn;
        alertElem.addEventListener('click', () => {
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
  }
  ngAfterViewInit(): void {
    this.initSound();
  }
  trackByFn(index, item) {
    return item.id;
  }

  ngOnInit() {
    AudioTouchUnlock.onInit();
  }
  playSound(url: string): void {
    if (this.soundOn) {
      AudioTouchUnlock.play(url);
    }
  }

}
