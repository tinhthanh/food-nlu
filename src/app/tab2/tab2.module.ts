import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {FoodContainerPageModule} from './food-container/food-container.module';
import {ModalViewItemComponent} from './food-container/modal-view-item/modal-view-item.component';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FoodContainerPageModule,
    Tab2PageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [Tab2Page, ModalViewItemComponent],
  exports: [ModalViewItemComponent]
})
export class Tab2PageModule {}
