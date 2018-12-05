import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ParametrePage } from  '../parametre/parametre'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goToSettingsPage(){
    this.navCtrl.push(ParametrePage);
  }

}
