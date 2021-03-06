import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPage } from './details.page';
import { SearchComponent } from './search/search.component';
import { ViewCategoryDetailsComponent } from './view-category-details/view-category-details.component';
import { ViewStoreDetailsComponent } from './view-store-details/view-store-details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  },{
    path: 'category/:id',
    component: ViewCategoryDetailsComponent
  },
  {
    path: 'store',
    component: ViewStoreDetailsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule {}
