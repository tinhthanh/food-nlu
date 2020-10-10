import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import {BannerComponent} from './share/banner/banner.component';
import { GoogleFoodFormComponent} from  './share/google-food-form/google-food-form.component'
import {SmoothieOptionComponent} from './share/smoothie-option/smoothie-option.component';
import { CardSmoothieComponent } from './share/components/card-smoothie/card-smoothie.component';
const CORE_COMPONENT =  [CardSmoothieComponent ];
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, BannerComponent, GoogleFoodFormComponent, SmoothieOptionComponent, ...CORE_COMPONENT],
  exports: [ExploreContainerComponent, BannerComponent, GoogleFoodFormComponent, SmoothieOptionComponent, ...CORE_COMPONENT]
})
export class ExploreContainerComponentModule {}
