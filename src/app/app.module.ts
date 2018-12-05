
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ConseilPage } from '../pages/conseil/conseil';
import { NotificationPage } from '../pages/notification/notification';
import { EtinerairePage } from '../pages/etineraire/etineraire';
import { ParametrePage } from '../pages/parametre/parametre';
import { DiagnosticCompletPage } from '../pages/diagnostic-complet/diagnostic-complet';
import { DeplacementExtraUrbainPage } from './../pages/deplacement-extra-urbain/deplacement-extra-urbain';
import { DeplacementIntraUrbainPage } from './../pages/deplacement-intra-urbain/deplacement-intra-urbain';
import { AppelPage } from './../pages/appel/appel';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AppelPage,
    ConseilPage,
    NotificationPage,
    EtinerairePage,
    ParametrePage,
    DeplacementExtraUrbainPage,
    DeplacementIntraUrbainPage,
    DiagnosticCompletPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AppelPage,
    ConseilPage,
    NotificationPage,
    EtinerairePage,
    ParametrePage,
    DeplacementExtraUrbainPage,
    DeplacementIntraUrbainPage,
    DiagnosticCompletPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
