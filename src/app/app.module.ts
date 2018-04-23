import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { AboutUsPage } from '../pages/about-us/about-us';
import { TrainingPage } from '../pages/training/training';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { DriveDetailsPage } from '../pages/drive-details/drive-details';
import { GalleryPage } from '../pages/gallery/gallery';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FiredbProvider } from '../providers/firedb/firedb';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MyProfilePage,
    AboutUsPage,
    TrainingPage,
    ContactUsPage,
    DriveDetailsPage,
    GalleryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MyProfilePage,
    AboutUsPage,
    TrainingPage,
    ContactUsPage,
    DriveDetailsPage,
    GalleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FiredbProvider
  ]
})
export class AppModule {}