import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTypesPage } from './menu-types';

@NgModule({
  declarations: [
    MenuTypesPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuTypesPage),
  ],
})
export class MenuTypesPageModule {}
