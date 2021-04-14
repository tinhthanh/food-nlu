import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

import {ChartComponent,ApexAxisChartSeries,ApexChart,ApexYAxis,ApexXAxis,ApexTitleSubtitle} from "ng-apexcharts";
import { interval, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService, User } from 'src/app/services/auth.service';
import { FollowBetManuallyService } from 'src/app/services/follow-bet-manually.service';
import { WefinexChartService } from 'src/app/services/wefinex-chart.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-chart-wefinex',
  templateUrl: './chart-wefinex.component.html',
  styleUrls: ['./chart-wefinex.component.scss'],
})
export class ChartWefinexComponent implements OnInit, AfterViewInit, OnDestroy {
  stake: string = '1';
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  countDown = 30 ;
  isPlaceBet =  false;
  private ngUnsubscribe = new Subject();
  user: User;
  subscription: Subscription;
  day = new Date().getDay();
  constructor( public alertController: AlertController, public auth: AuthService, public followBetManuallyService: FollowBetManuallyService, private modalCtrl: ModalController, private wefinexChartService: WefinexChartService) { 
    
    this.chartBar(true);
   
  }
  chartBar(isChart, num?:number) {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    if(isChart) {
    this.subscription =  this.wefinexChartService.getListByCondition((ref) => ref.orderBy('settledDateTime', 'desc').limit(27)).pipe(takeUntil(this.ngUnsubscribe)).subscribe((k) => {
        const data = k.map((item) => { return { x : new Date(item.createdTime), y: [item.openPrice ,item.highPrice , item.lowPrice , item.closePrice]}}).reverse();
        console.log("change.....");
        this.chartOptions = {
          series: [
            {
              name: "candle",
              data: data
            }
          ],
          chart: {
            type: "candlestick",
          
          },
          title: {
            text: "",
            align: "left"
          },
          xaxis: {
            type: "datetime",
            labels: {
              datetimeUTC: false
          }
          },
          yaxis: {
            tooltip: {
              enabled: false
            },
            show: false
          }
        };
    });
    } else {
     const temp =  this.setKeyByDate(num || 0);
     const day =  String(temp.getDate()).padStart(2, '0') ;
     const month =   String(temp.getMonth() + 1).padStart(2, '0') ;
     const year = temp.getFullYear();
      let start =  new Date(`${year}-${month}-${day} 00:00:00`).getTime();
      let end = new Date(`${year}-${month}-${day} 23:59:59`).getTime();
      this.subscription =  this.wefinexChartService.getListByCondition((ref) => ref.where('settledDateTime', '>', start)
      .where('settledDateTime', '<', end).orderBy('settledDateTime', 'desc')).pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
 //const data  = ["T", "T" , "G" , "G", "G", "T" , "G", "T",  "T" ,"T" , "T","T"];
      let result = [];
      let same:any = data[0];
      let obj = {};
      for( let i = 0 ; i < data.length; i++) {
        const d:any = data[i] ;
          if(d.type !== same.type) { 
          if(result.length > 1){
            const listKey = result.map(k => k.type).join('') ;
            const key  = listKey.length + listKey[0] ;
            
            obj[key]  = [...(obj[key] || [] ), result[0].key.split(' ')[1]]  ;
          }
          result = [];
        }
        result.push(d)
        same = d;

      }
      if(result.length > 1){
        const listKey = result.map(k => k.type).join('') ;
        const key  = listKey.length + listKey[0] ;
        obj[key]  =  [...(obj[key] || [] ), result[0].key.split(' ')[1]];
      }
      var temp1 = obj;
      var list = Object.values(Object.keys(temp1).reduce( (pre , curr) => {  pre[curr.replace("T", "").replace("G", "")]  = { name:curr.match(/\d+/g)[0] , T : (temp1[curr.match(/\d+/g)[0] + "T"] ? temp1[curr.match(/\d+/g) + "T"].length : 0)  , G : (temp1[curr.match(/\d+/g)[0] + "G"] ? temp1[curr.match(/\d+/g) + "G"].length : 0) } ; return pre; } , {})).
      sort((b1: any, b2: any) => Number(b1.name) - Number(b2.name) ) ;
       
      this.chartOptions = {
         
          series: [
            {
              name: "Giảm",
              data: list.map((k: any) => k.G),
              color: 'rgb(254 ,25, 25)'
            },
            {
              name: "Tăng",
              data: list.map((k: any) => k.T),
              color: 'rgb(0, 143, 251)'
            }
          ],
          chart: {
            height: 350,
            type: "bar"
          },
          title: {
            text: "Time"
          },
          xaxis: {
            categories: 
            list.map((k: any) => k.name)
          }
        };
    });
    }
  
  }
  setKeyByDate (num: number)  {
     let d = new Date();
     d.setHours(0);
     d.setMinutes(0);
     d.setDate(d.getDate()-num);
    return d;
}
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  ngAfterViewInit(): void {
  }
  changeFollowByCommand ($evnt) {

  }
  ngOnInit() {
    this.auth.user$.subscribe( z => {
      this.user = z ;
  });
    interval(500).pipe(takeUntil(this.ngUnsubscribe)).subscribe( value => {
      let second =  new Date().getSeconds() ;
            second = second%31; 
      this.countDown = 30 - second ;
      this.isPlaceBet = ( new Date().getSeconds()  <= 30 );
    }, err => console.log(err));
  }

  keyboardChange($event) {
    if($event.type === 'change' ) {
      this.stake =  $event.value;
    }
    if($event.type === 'add' ) { 
      this.stake = this.stake + ''+  $event.value ;
    }
    if($event.type === 'clear' ) { 
      this.stake = '';
    }
    if($event.type === "remove" ) { 
      if(this.stake.length !== 0) {
        this.stake =   this.stake.slice(0, -1);
      }
    }
  }
  async  close() {
    await this.modalCtrl.dismiss();
  }
  async  dismiss(type) {
    // await this.modalCtrl.dismiss({
    //   data: { stake: this.stake , type: type }
    //  });
     if(this.stake && this.user) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Success!',
        message: 'Đặt cược <strong>'+this.stake+'</strong>!!!',
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
              this.followBetManuallyService.addComandByUser(this.user.uid, this.stake,type);
              this.stake = '1';
              console.log('Confirm Okay');
            }
          }
        ]
      });
      await alert.present();

     } else {
       alert("Không được để trống stake");
     }
   }
   public generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
 