import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrayertimeProvider } from '../../providers/prayertime/prayertime';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-solat',
  templateUrl: 'solat.html',
})
export class SolatPage {

  prayer:any;
  city1:string;
  state1:string;
  zone:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private prayerTime:PrayertimeProvider,private storage:Storage) {
  }

  ionViewWillEnter(){
  	this.storage.get('location').then((val) => { 
			console.log(this.storage.get('location')); 
  		if(val != null){
			  let location = JSON.parse(val);
        this.city1 = location.city;
        this.state1 = location.state;

        if(this.city1 == 'Sepang'){
          this.zone = 'SGR01';
          this.waktusolat(this.zone);
        } else if(this.city1 == 'Kuala Lumpur'){
          this.zone = 'WLY01';
          this.waktusolat(this.zone);
        } else if (this.city1 == 'Kerteh'){
          this.zone = 'TRG04';
          this.waktusolat(this.zone);
        } else if (this.city1 == 'Pulau Pinang'){
          this.zone = 'PNG01';
          this.waktusolat(this.zone);
        }else if (this.city1 == 'Bagan Serai'){
          this.zone = 'PRK06';
          this.waktusolat(this.zone);
        }else if (this.city1 == 'Labuan'){
          this.zone = 'WLY02';
          this.waktusolat(this.zone);
        }
        
  		}
    })
  }

  waktusolat(citi: string){
    this.prayerTime.getPrayerTime(citi)
  	.subscribe(waktuSolat => {
      this.prayer = waktuSolat;
  	});
  }

  
  
}
