import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddCommandComponent } from './pages/add-command/add-command.component';
import { WefinexComponent } from './pages/wefinex/wefinex.component';
import { WifinexHomeComponent } from './pages/wefinex/pages/wifinex-home/wifinex-home.component';
import { WefinexHistoryComponent } from './pages/wefinex/pages/wefinex-history/wefinex-history.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SettingComponent } from './pages/wefinex/modal/setting/setting.component';
import { HistoryComponent } from './pages/wefinex/modal/history/history.component';


registerLocaleData(vi);

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, AddCommandComponent, WefinexComponent,
     WifinexHomeComponent, WefinexHistoryComponent, SettingComponent, HistoryComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule, CartModalPageModule,
     BrowserModule, IonicModule.forRoot({ mode: "md" }),
      AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
       FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: NZ_I18N, useValue: vi_VN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
