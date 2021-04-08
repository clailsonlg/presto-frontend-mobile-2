import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzasMenuPage } from './pizzas-menu';

@NgModule({
  declarations: [
    PizzasMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzasMenuPage),
  ],
})
export class PizzasMenuPageModule {}
