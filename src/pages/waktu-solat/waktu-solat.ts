import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-waktu-solat',
  templateUrl: 'waktu-solat.html',
})
export class WaktuSolatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaktuSolatPage');
  }

}
