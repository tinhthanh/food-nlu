import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { FoodContainerComponent } from './food-container.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [FoodContainerComponent],
  exports: [FoodContainerComponent]
})
export class FoodContainerPageModule {}
