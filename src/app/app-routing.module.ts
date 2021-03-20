import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddCommandComponent } from './pages/add-command/add-command.component';
import { StockComponent } from './pages/forms/pages/stock/stock.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { WefinexComponent } from './pages/wefinex/wefinex.component';

const routes: Routes = [
  {
    path: '',
    component: WefinexComponent
  },
  {
    path: '',
    component: MainLayoutComponent ,
    children: [
      {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
      }
    ],
  },
  {
    path: 'stock',
    component: StockComponent
  }
  ,
  {
    path: 'forms',
    loadChildren: () => import('./pages/forms/forms.module').then( m => m.FormsPageModule)
  },
  {
    path: 'add',
    component: AddCommandComponent
  }
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
