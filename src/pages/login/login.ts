import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public menu: MenuController ) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    this.navCtrl.setRoot('HomePage');
  }

}
