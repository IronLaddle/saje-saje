import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'; 
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	weather:any;
	city1:string;
	state1:string;

	location:{
		city:string;
		state:string;
	}

  constructor(
  	public navCtrl: NavController, 
  	private weatherProvider:WeatherProvider,
  	private storage:Storage) {

	}
	
  ionViewWillEnter(){
  	this.storage.get('location').then((val) => { 
			console.log(this.storage.get('location')); 
  		if(val != null){
			  //this.location = JSON.parse(val);
			  let location = JSON.parse(val);
				this.city1 = location.city;
				this.state1 = location.state;
				this.getWeather(this.city1,this.state1);
  		}else {
  			this.location = {
  				city:'Sepang',
  				state: 'Malaysia'
				}
				this.getWeather(this.location.city,this.location.state);
  		}
  	})
  	
	}
	
	getWeather(city2:string,state1:string ){
	this.weatherProvider.getweather(city2, state1)
  	.subscribe(weather => {
  		console.log(weather);
  		this.weather = weather.current_observation;
  	});
	}


}
