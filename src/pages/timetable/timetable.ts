import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {

  courses:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.courses = [
      {"csName":"STATISTICAL DATA MINING","csGroup":"CS7792A","csCode":"STA761","csDay":"Saturday","csTime":"8.10am-11.00am","csVenue":"BIG DATA LAB"},
      {"csName":"ADVANCED DATA SCIENCE TECHNOLOGY","csGroup":"CS7792A","csCode":"DSC761","csDay":"Saturday","csTime":"11.10am-2.00pm","csVenue":"BIG DATA LAB"},
      {"csName":"ADVANCED DECISION SUPPORT SYSTEMS","csGroup":"CS7792A","csCode":"SYS751","csDay":"Saturday","csTime":"3.10pm-6.00pm","csVenue":"M07(CS)"},
      {"csName":"ADVANCED DATA ORGANIZATION","csGroup":"CS7791A","csCode":"CSC787","csDay":"Sunday","csTime":"8.10am-11.00am","csVenue":"BIG DATA LAB"}
      ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }

}
