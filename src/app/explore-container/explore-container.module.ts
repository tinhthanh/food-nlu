import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import {BannerComponent} from './share/banner/banner.component';
import { GoogleFoodFormComponent} from  './share/google-food-form/google-food-form.component'
import {SmoothieOptionComponent} from './share/smoothie-option/smoothie-option.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, BannerComponent, GoogleFoodFormComponent, SmoothieOptionComponent],
  exports: [ExploreContainerComponent, BannerComponent, GoogleFoodFormComponent, SmoothieOptionComponent]
})
export class ExploreContainerComponentModule {}
