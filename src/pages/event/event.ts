import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { ListEvent } from '../../models/event-model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AddeventPage } from '../addevent/addevent';


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  eventListRef : AngularFireList<ListEvent[]>;
  eventlist:Observable<ListEvent[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database:AngularFireDatabase,
    public alertCtrl: AlertController) {

      this.eventlist =  this.database.list('/event-list').valueChanges();
      console.log('EventPage >>>' +  this.eventlist);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  navigateToAddEventPage() {
    this.navCtrl.push(AddeventPage);
  }

}
