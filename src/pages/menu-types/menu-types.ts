import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuTypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-types',
  templateUrl: 'menu-types.html',
})
export class MenuTypesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTypesPage');
  }

  drinksMenu() {
    this.navCtrl.setRoot('DrinksMenuPage');
  }

  pizzasMenu() {
    this.navCtrl.setRoot('PizzasMenuPage');
  }

}
