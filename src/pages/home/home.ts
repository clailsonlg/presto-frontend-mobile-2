import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  profile() {
    this.navCtrl.setRoot('ProfilePage');
  }

  startService() {
    this.navCtrl.setRoot('MenuTypesPage');
  }

  requests() {
    this.navCtrl.setRoot('RequestsPage');
  }

}
