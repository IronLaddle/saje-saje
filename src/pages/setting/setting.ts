import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { MovrptPage } from '../movrpt/movrpt';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
	city:string;
	state:string;
	countries:any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
		private storage:Storage,
		public alertCtrl: AlertController) {

			this.countries = [
				'Sepang',
				'Kuala Lumpur',
				'Pulau Pinang',
				'Bagan Serai',
				'Kerteh',
				'Labuan'
		];

  	this.storage.get('location').then((val)=>{
  		if(val != null){
  			let location = JSON.parse(val);
  			this.city = location.city;
  			this.state = location.state;
  		}else {
  			this.city = 'Sepang';
  			this.state = 'Malaysia';
  	}});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  saveForm(){
  	let location = {
  		city: this.city,
  		state: this.state
  	}
  	console.log(location);
  	this.storage.set('location', JSON.stringify(location));
		//this.navCtrl.push(MovrptPage);
		
		let alert = this.alertCtrl.create({
			title: 'Confirm Location?',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Okay',
					handler: () => {
						this.navCtrl.setRoot(MovrptPage);
					}
				}
			]
		});
		alert.present();
	}

}
