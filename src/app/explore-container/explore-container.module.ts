import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import {BannerComponent} from './share/banner/banner.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, BannerComponent],
  exports: [ExploreContainerComponent, BannerComponent]
})
export class ExploreContainerComponentModule {}
