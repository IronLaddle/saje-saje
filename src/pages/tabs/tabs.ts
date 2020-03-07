import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';
import { SolatPage } from '../solat/solat';
import { TimetablePage } from '../timetable/timetable';
import { MovrptPage } from '../movrpt/movrpt';
import { ListPage } from '../list/list';
import { EventPage } from '../event/event';
import { WaktuSolatPage } from '../waktu-solat/waktu-solat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  tab1Root = MovrptPage;
  //tab2Root = WaktuSolatPage;
  tab2Root = SolatPage;
  tab3Root = EventPage;
  // tab3Root = AboutPage;
  tab4Root = TimetablePage;
  tab5Root = SettingPage;
  tab6Root = ListPage;

  constructor() {

  }
}
