import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { FoodContainerComponent } from './food-container.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, NzTabsModule, NzIconModule],
  declarations: [FoodContainerComponent ],
  exports: [FoodContainerComponent]
})
export class FoodContainerPageModule {}
