import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  interval, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { WefinetComand, WefinexCommandService } from 'src/app/services/wefinex-command.service';
import  firebase from 'firebase';
import { WefinexResultService } from 'src/app/services/wefinex-result.service';
@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.scss'],
})
export class AddCommandComponent implements OnInit {
  form: FormGroup;
  $time: Observable<Date> ;
  constructor( private formBuilder: FormBuilder,private wefinexCommandService: WefinexCommandService, private wefinexResultService: WefinexResultService) { }

  ngOnInit() {
    this.$time = interval(1000).pipe(map(() => new Date()))
    const d = new Date();
    const hours = String(d.getHours()).padStart(2, '0') ;
    const minute = String(d.getMinutes()).padStart(2, '0')   ;
    
    const day =  String(d.getDate()).padStart(2, '0') ;
    const month =   String(d.getMonth() + 1).padStart(2, '0') ;
    const year = d.getFullYear();

    const currentTime =  `${day}:${month}:${year} ${hours}:${minute}` ;
 
    this.form = this.formBuilder.group({
      action: ['THUA', [Validators.required]],
      price: ['1.0',[Validators.required]],
      id: [currentTime , Validators.required],
      time: [currentTime, Validators.required],
      type: ['G', Validators.required]
    });
  }
  
  processForm(event) {
    event.preventDefault(); 
    this.wefinexCommandService.add({id : "command", price: this.form.value.price, time: this.form.value.time, type: this.form.value.type}, "command");
    alert("Push success..");
  }
  pushResult($event) {
    event.preventDefault(); 
    console.log(this.form.value)
    this.form.value.lastUpdate = new Date();
    this.wefinexResultService.add(this.form.value, this.form.value.id);
    alert("Push success..");
  }
}
