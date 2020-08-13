import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.page.html',
  styleUrls: ['./food-container.page.scss'],
})
export class FoodContainerComponent implements OnInit {
  items: any[] = [];

  tabs = [
    {
      active: true,
      name: 'Sinh tố',
      icon: 'apple'
    },
    {
      active: false,
      name: 'Nước ép',
      icon: 'android'
    },
    {
      active: false,
      name: 'Trái cây',
      icon: 'android'
    },
    {
      active: false,
      name: 'Khác',
      icon: 'android'
    }
  ];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        name: i + ' - ' + images[rotateImg],
        imgSrc: this.getImgSrc(),
        avatarSrc: this.getImgSrc(),
        imgHeight: Math.floor(Math.random() * 50 + 150),
        content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
      });

      rotateImg++;
      if (rotateImg === images.length) {
        rotateImg = 0;
      }
    }
  }

  ngOnInit() {

  }



  private getImgSrc(): string {
  const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
  rotateImg++;
  if (rotateImg === images.length) {
    rotateImg = 0;
  }
  return src;
}

}

let rotateImg = 0;

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const images = [
  'bandit',
  'batmobile',
  'blues-brothers',
  'bueller',
  'delorean',
  'eleanor',
  'general-lee',
  'ghostbusters',
  'knight-rider',
  'mirth-mobile'
];
