import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category.service'

@Component({
  selector: 'app-smoothie-option',
  templateUrl: './smoothie-option.component.html',
  styleUrls: ['./smoothie-option.component.scss'],
})
export class SmoothieOptionComponent implements OnInit {
  category: Category[] =  [];
  constructor(private router: Router, private categoryService: CategoryService) {
    this.category =  this.categoryService.getCategories();
   }

  ngOnInit() {}
  public viewDetails(ev) {
    this.router.navigate([`/details/category/${ev.id}`]);
  }

  public viewStoreDetails(ev) {
    this.router.navigate([`/details/store`]);
  }
  

}
