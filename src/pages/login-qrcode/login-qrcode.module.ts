import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginQrcodePage } from './login-qrcode';

@NgModule({
  declarations: [
    LoginQrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginQrcodePage),
  ],
})
export class LoginQrcodePageModule {}
