import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

import * as firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
email : string;
password : string;
users = [{"mobno":"123","email":"a@b.com"},{"mobno":"456"}];
user = [];
ref = firebase.database().ref('users/');
  constructor(public navCtrl: NavController) {
  
  this.ref.on('value', resp => {
    this.users = [];
    this.users = snapshotToArray(resp);
  });
  
  }
  
  ionViewDidLoad()
  {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
  if (user) {
    this.navCtrl.setRoot(HomePage);
    unsubscribe();
  } 
});
  }
  goToHome(params){
 
 firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
 user => {
 console.log(user.uid);
 this.navCtrl.setRoot(HomePage);
 }
 );
    // on valid mobile number after ui validation
    // check if mobile no exists in firebase
    // if not ask to register
    // if yes goto home page
    
  }
  
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};