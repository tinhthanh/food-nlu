import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.page.html',
  styleUrls: ['./food-container.page.scss'],
})
export class FoodContainerComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit() {
    console.log("Test")
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);
  }

}
