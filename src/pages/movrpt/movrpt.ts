import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';


@Component({
  selector: 'page-movrpt',
  templateUrl: 'movrpt.html',
})
export class MovrptPage {

  reports:any;
  hideMe : boolean = false;

  public isLocationEnabled 	: boolean 	= false;
  public isCameraEnabled 		: boolean 	= false;
  public isWifiEnabled 		: boolean 	= false;

  public latitude     			: any;
  public longitude    			: any;

  constructor(public navCtrl: NavController, 
    private _PLATFORM : Platform,
    public navParams: NavParams) {

    this.reports = [
      {"name":"Security Info","desc":"Contains information about all of the products that are available to purchase through Moventum.","desc1":"Product transaction"},
      // {"name":"Security Position","desc":"Show lists each of the holdings* for all of the clients.","desc1":"Client holding status or how much client invest"}
      ]
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovrptPage');
  }

  hide() {
    console.log('Click')
    this.hideMe = !this.hideMe;
  }

 
}
