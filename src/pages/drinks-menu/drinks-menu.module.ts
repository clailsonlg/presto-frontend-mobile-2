import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinksMenuPage } from './drinks-menu';

@NgModule({
  declarations: [
    DrinksMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(DrinksMenuPage),
  ],
})
export class DrinksMenuPageModule {}
