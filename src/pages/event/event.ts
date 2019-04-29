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
  eventlist:Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database:AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {

      //this.eventlist =  this.database.list('/event-list').valueChanges();
      //console.log('EventPage >>>' +  this.eventlist);

      this.eventlist = this.getFiles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  getFiles() {
    let ref = this.database.list('/event-list');
 
    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  navigateToAddEventPage() {
    this.navCtrl.push(AddeventPage);
  }

  delete(i){
    console.log('selectEvent' + JSON.stringify(i));
    let key = i.key;
    console.log(key);

   this.actionSheetCtrl.create({
     title: `${i.eventName}`,
     buttons: [
       {
         text: 'Delete',
         icon: 'md-trash',
         role: 'destructive',
         handler: () => {
            let ref = this.database.list('/event-list');
            ref.remove(key);

            let alert = this.alertCtrl.create({
              title: 'Event deleted!',
              buttons: ['OK']
            });
            alert.present();
         }
       },
       {
         text: 'Cancel',
         icon:'md-close',
         role: 'cancel',
         handler: () => {
           console.log("Taz has selected cancel button");
         }
       }
     ]
   }).present();
 }

}
