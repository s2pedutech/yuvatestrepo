import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { TrainingPage } from '../pages/training/training';
import { AboutUsPage } from '../pages/about-us/about-us';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { GalleryPage } from '../pages/gallery/gallery';

import * as firebase from 'Firebase';

var config = {
    apiKey: "AIzaSyB24kfDF4UY3D9OXFnutu-L4p4PQB7k3oo",
    authDomain: "yuva-f5e18.firebaseapp.com",
    databaseURL: "https://yuva-f5e18.firebaseio.com",
    projectId: "yuva-f5e18",
    storageBucket: "yuva-f5e18.appspot.com",
    messagingSenderId: "32360053062"
  };
  firebase.initializeApp(config);
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    
  }
  
  
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToMyProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MyProfilePage);
  }goToTraining(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TrainingPage);
      }goToAboutUs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutUsPage);
  }goToContactUs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactUsPage);
  }goToLogin(params){
    if (!params) params = {};
    firebase.auth().signOut();
    this.navCtrl.setRoot(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToGallery(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GalleryPage);
  }
}
