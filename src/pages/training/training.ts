import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'Firebase';
@Component({
  selector: 'page-training',
  templateUrl: 'training.html'
})
export class TrainingPage {

data = {};
ref = firebase.database().ref('trainings/');
  constructor(public navCtrl: NavController) {
  firebase.database().ref('trainings/').on('value', resp => {
  console.log(resp.val());
    this.data = [];
    this.data = resp.val();
  });
  
  }
  
}
