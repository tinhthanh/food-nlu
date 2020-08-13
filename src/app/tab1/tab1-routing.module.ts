import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ExploreContainerComponentModule],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
