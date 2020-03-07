import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';
import { SolatPage } from '../pages/solat/solat';
import { PrayertimeProvider } from '../providers/prayertime/prayertime';
import { MessageHelper } from '../providers/message-helper/message-helper';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ListPage } from '../pages/list/list';
import { EditnotePage } from '../pages/editnote/editnote';
import { AddnotePage } from '../pages/addnote/addnote';
import { EventPage } from '../pages/event/event';
import { AddeventPage } from '../pages/addevent/addevent';
import { TimetablePage } from '../pages/timetable/timetable';
import { MovrptPage } from '../pages/movrpt/movrpt';
import { WaktuSolatPage } from '../pages/waktu-solat/waktu-solat';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBJ5aVRLvWLA9fE-9-IX0IIcHYlfBrXvy8",
  authDomain: "my-project-97d4e.firebaseapp.com",
  databaseURL: "https://my-project-97d4e.firebaseio.com",
  projectId: "my-project-97d4e",
  storageBucket: "my-project-97d4e.appspot.com",
  messagingSenderId: "432434337000"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SolatPage,
    SettingPage,
    TimetablePage,
    MovrptPage,
    ListPage,
    EditnotePage,
    AddnotePage,
    EventPage,
    AddeventPage,
    WaktuSolatPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SolatPage,
    SettingPage,
    TimetablePage,
    MovrptPage,
    ListPage,
    EditnotePage,
    AddnotePage,
    EventPage,
    AddeventPage,
    WaktuSolatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    PrayertimeProvider,
    MessageHelper,
  ]
})
export class AppModule {}
