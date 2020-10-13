import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { ViewCategoryDetailsComponent } from './view-category-details/view-category-details.component';
import { ViewStoreDetailsComponent } from './view-store-details/view-store-details.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    ExploreContainerComponentModule,
  ],
  declarations: [DetailsPage, ViewCategoryDetailsComponent, ViewStoreDetailsComponent]
})
export class DetailsPageModule {}
