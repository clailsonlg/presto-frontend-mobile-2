import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginCodMesaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-cod-mesa',
  templateUrl: 'login-cod-mesa.html',
})
export class LoginCodMesaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginCodMesaPage');
  }

  scanQrCode() {
    this.navCtrl.setRoot('LoginQrcodePage');
  }

}
