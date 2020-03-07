import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PrayertimeProvider {

  url;
  zones;

  constructor(public http: Http) {
    console.log('Hello PrayertimeProvider Provider');
    //this.url = 'http://api.azanpro.com/times/today.json?zone='+ this.zones +'&format=12-hour';
  }

  getPrayerTime(zone): Observable<any> {
    this.zones = zone;
    //this.url = 'https://api.azanpro.com/times/today.json?zone='+ this.zones +'&format=12-hour';
    this.url = 'http://card.sendukbesi.net/?id='+ this.zones;
  	return this.http.get(this.url)
    .map(res => res.json());
  }

}
