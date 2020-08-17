import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-google-food-form',
  templateUrl: './google-food-form.component.html',
  styleUrls: ['./google-food-form.component.scss'],
})
export class GoogleFoodFormComponent implements OnInit {
   firstName;
   lastName;
  constructor(public alertController: AlertController) { }

  ngOnInit() {}


   processForm(event) {
    event.preventDefault();
   this.alertController.create({
      header: 'Account Created',
      message: `Created account for: <b>${this.firstName} ${this.lastName}</b>`,
      buttons: [{
        text: 'OK'
      }]
    }).then(alert => alert.present());
  }

   handleFirstNameValue(event) {
    this.firstName = event.target.value;
  }

   handleLastNameValue(event) {
   this.lastName = event.target.value;
  }

}
