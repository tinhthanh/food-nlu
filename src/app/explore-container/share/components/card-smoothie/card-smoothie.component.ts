import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/services/category.service';

@Component({
  selector: 'app-card-smoothie',
  templateUrl: './card-smoothie.component.html',
  styleUrls: ['./card-smoothie.component.scss'],
})
export class CardSmoothieComponent implements OnInit {
  @Input() category: Category ;
  @Output() navigation: EventEmitter<Category> = new EventEmitter<Category>(); 
  @Input() index = 1;
  constructor() { }

  ngOnInit() {}

  public viewDetails(c) {
    
    this.navigation.emit(c);
  }

}

