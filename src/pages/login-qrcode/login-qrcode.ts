import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login-qrcode',
  templateUrl: 'login-qrcode.html',
})
export class LoginQrcodePage {

  options: BarcodeScannerOptions;
  encodText: string='';
	encodedData: any={};
	scannedData: any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginQrcodePage');
  }

  scan(){
		this.options= {
			prompt: 'Scan you barcode'
		};
		this.scanner.scan(this.options).then((data) => {
			this. scannedData = data;
		}, (err) => {
			console. log('Error :' , err);
		})
	}
	encode(){
		this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
			this.encodedData = data;
		}, (err) => {
			console.log('Error :' , err);
		})
	}

}
