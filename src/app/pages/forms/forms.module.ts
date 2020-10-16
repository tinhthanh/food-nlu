import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormsPageRoutingModule } from './forms-routing.module';

import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/regiser/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsPageRoutingModule
  ],
  declarations: [ LoginComponent, RegisterComponent]
})
export class FormsPageModule {}
