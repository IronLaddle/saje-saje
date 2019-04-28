import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
	apiKey='';
	url;


  constructor(public http: Http) {
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getweather(city, state){
  	return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res =>
       res.json()
    );
  }

}
