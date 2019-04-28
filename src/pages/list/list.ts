import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { ListItem } from '../../models/list-model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { EditnotePage } from '../editnote/editnote';
import { AddnotePage } from '../addnote/addnote';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})


export class ListPage {

  noteListRef : AngularFireList<ListItem[]>;
  notelist:Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private database:AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController, 
    public alertCtrl: AlertController) {

      //this.noteListRef = this.database.list('notes-list');
      //this.notelist = this.noteListRef.valueChanges();
     
      this.notelist =  this.database.list('/notes-list').valueChanges();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ListPage' +  JSON.stringify(this.notelist));
  }

  //selectNoteItem(listItem: ListItem) {
  selectNoteItem(i) {
    console.log('selectNoteItem' +  JSON.stringify(i));
    this.actionSheetCtrl.create({
      title: `${i.lsName}`,
      buttons: [
        {
          text: 'Edit',
          icon: 'md-create',
          handler: () => {
            this.navCtrl.push(EditnotePage, 
                              { shoppingItemId: i.$key});
          }
        },
        {
          text: 'Delete',
          icon: 'md-trash',
          role: 'destructive',
          handler: () => {
             //this.noteListRef.remove(listItem.$key);
             this.noteListRef.remove(i.$key);

             let alert = this.alertCtrl.create({
               title: 'Item deleted!',
               subTitle:'Item from the shopping list is removed.',
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
            console.log("User has selected cancel button");
          }
        }
      ]
    }).present();
  }

  navigateToAddNotePage() {
    this.navCtrl.push(AddnotePage);
  }

  delete(i){
    console.log('selectNoteItem' +  i);
    ///this.database.list('notes-list').remove(i);
  }
 
}
