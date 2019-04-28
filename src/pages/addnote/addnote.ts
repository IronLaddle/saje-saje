import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ListItem } from '../../models/list-model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-addnote',
  templateUrl: 'addnote.html',
})
export class AddnotePage {

  notesItem = {} as ListItem;
  noteListRef: AngularFireList<ListItem>

  constructor(public navCtrl: NavController, public navParams: NavParams,   private database:AngularFireDatabase, public alertCtrl: AlertController) {

    this.noteListRef = this.database.list('/notes-list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnotePage');
  }

  addNotesItem(notesItem: ListItem) {
    console.log('notesItem' + JSON.stringify(notesItem));
    this.noteListRef.push({
       lsName: this.notesItem.lsName,
       lsDesc: this.notesItem.lsDesc,
    });
    
      let alert = this.alertCtrl.create({
        title: 'New Notes Added!',
        subTitle: this.notesItem.lsName+ ' added to My Notes',
        buttons: ['OK']
      });
      alert.present();

      this.notesItem = {} as ListItem;
    
      this.navCtrl.pop();

    

  }

}
