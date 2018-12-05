import { Component } from '@angular/core';

import { NotificationPage } from '../notification/notification';
import { GeolocationPage } from '../geolocation/geolocation';
import { AppelPage } from '../appel/appel';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotificationPage;
  tab3Root = AppelPage;
  tab4Root = GeolocationPage;

  constructor() {

  }
}
