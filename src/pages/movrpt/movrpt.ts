import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-movrpt',
  templateUrl: 'movrpt.html',
})
export class MovrptPage {

  reports:any;
  hideMe : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    

    this.reports = [
      {"name":"Security Info","desc":"Contains information about all of the products that are available to purchase through Moventum.","desc1":"Product transaction"},
      {"name":"Security Position","desc":"Show lists each of the holdings* for all of the clients.","desc1":"Client holding status or how much client invest"},
      {"name":"Security Transaction","desc":"Show lists all of the trades that have been made on that specific day.","desc1":"Product transaction"},
      {"name":"Client Info","desc":"Contains the personal information about each of the Capital Platforms clients."},
      {"name":"Cash Position","desc":"Show lists how much cash for each customer has in each of the different currencies.","desc1":"Cash balance"},
      {"name":"Cash Transaction","desc":"Show lists all of the cash transactions for the date of the report. Transactions include forex transactions, purchases, incoming and outgoing transfers."},
      {"name":"Commission","desc":"Show lists all the commissions from Moventum that are being paid or taken from Capital Platform."},
      {"name":"Client Missing Documents","desc":"Show lists each of the documents that have not yet been submitted for each customer account that has been created through Capital Platforms."},
      {"name":"Pending Orders","desc":"Show lists the transactions that have been made through Capital Platforms, that are pending and have not yet been completed. When the transactions are completed by Moventum, the products will be removed from this report and added to the Security Position report."}
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
