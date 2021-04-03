import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import {ChartComponent,ApexAxisChartSeries,ApexChart,ApexYAxis,ApexXAxis,ApexTitleSubtitle} from "ng-apexcharts";
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  @Input() data: any = {price: 10};
  stake: string = '1';
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  countDown = 30 ;
  isPlaceBet =  false;
  private ngUnsubscribe = new Subject();
  constructor(private modalCtrl: ModalController, private wefinexChartService: WefinexChartService) { 
    
    this.wefinexChartService.getListByCondition((ref) => ref.orderBy('settledDateTime', 'desc').limit(17)).pipe(takeUntil(this.ngUnsubscribe)).subscribe((k) => {
        const data = k.map((item) => { return { x : new Date(item.settledDateTime), y: [item.openPrice ,item.highPrice , item.lowPrice , item.closePrice]}}).reverse();
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
            text: "Wefinex results",
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
    await this.modalCtrl.dismiss({
      data: { stake: this.stake , type: type }
     });
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
 