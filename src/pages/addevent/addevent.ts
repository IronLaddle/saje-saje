import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ListEvent } from '../../models/event-model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-addevent',
  templateUrl: 'addevent.html',
})
export class AddeventPage {

  eventsItem = {} as ListEvent;
  eventListRef: AngularFireList<ListEvent>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private databases:AngularFireDatabase, public alertCtrl: AlertController) {

    this.eventListRef =  this.databases.list('/event-list');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventPage');
  }

  addEventItem(eventsItem: ListEvent) {
    console.log('eventsItem' + JSON.stringify(eventsItem));
    this.eventListRef.push({
      eventName: this.eventsItem.eventName,
      eventDesc: this.eventsItem.eventDesc,
      eventDate: this.eventsItem.eventDate,
      eventPlace: this.eventsItem.eventPlace,
      eventStartTime : this.eventsItem.eventStartTime,
    });

      let alert = this.alertCtrl.create({
        title: 'New Notes Added!',
        subTitle: this.eventsItem.eventName+ ' added to My Event',
        buttons: ['OK']
      });
      alert.present();

      this.eventsItem = {} as ListEvent;
    
      this.navCtrl.pop();
  }

}
