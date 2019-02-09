
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController, LoadingOptions, Loading } from 'ionic-angular';

@Injectable()
export class MessageHelper {

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) {
  
  }
  
  toastMsg(text:string){
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2500,
      position: 'top'
    });
    toast.present();
  }

  showProcessLoader(loading:Loading, loadingCtrl:LoadingController){
    loading = loadingCtrl.create({
        content: 'Loading...',
        spinner: 'dots',
    });
    return loading;
  }

  showCustomLoader(loading:Loading, loadingCtrl:LoadingController, text:string){
    loading = loadingCtrl.create({
        content: text
    });
    return loading;
  }

  infoMsg(titleTxt:string, subTitleTxt:string, btnFunc) {
    let alert = this.alertCtrl.create({
      title: titleTxt,
      subTitle: subTitleTxt,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: btnFunc
        }
      ]
    });
    alert.present();
  }

  confirmMsg(titleTxt: string, messageTxt: string, submitBtnTxt: string, submitFunc, cancelBtnTxt: string, cancelFunc) {
    let alert = this.alertCtrl.create({
      title: titleTxt,
      message: messageTxt,
      buttons: [
        {
          text: cancelBtnTxt,
          role: 'cancel',
          handler: cancelFunc
        },
        {
          text: submitBtnTxt,
          handler: submitFunc
        }
      ]
    });
    alert.present();
  }
  
}