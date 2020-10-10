import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPage } from './details.page';
import { ViewCategoryDetailsComponent } from './view-category-details/view-category-details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  },{
    path: 'category/:id',
    component: ViewCategoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule {}
