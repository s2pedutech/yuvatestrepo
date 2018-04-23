import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FiredbProvider } from '../../providers/firedb/firedb';

import { DriveDetailsPage } from '../drive-details/drive-details'; 
import * as firebase from 'Firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


events=[];
colleges=[];
ref = firebase.database().ref('events/');
ref1 = firebase.database().ref('colleges/');
  constructor(public navCtrl: NavController, public fdb: FiredbProvider) {
  
  console.log("In home page");
    
  /*
  this.ref1.on('value', resp => {
     
     console.log("In colleges loading");
    this.colleges = [];
    this.colleges = snapshotToArray(resp);
    //console.log(this.colleges);
    var s = this.colleges.filter((x) => x.city === "Nagpur" || x.city === "Amravati" || x.city === "Chandrapur");
    console.log(s);
    
  });
    */
  }
  ngOnInit()
  {
    
    /*
    firebase.database().ref('events/').on('value', resp => {
     console.log("In events array");
     console.log(resp);
    this.events = [];
    this.events = snapshotToArray(resp);
  });
  */
  
  
  }
  
  ionViewWillEnter()
  {
    
  }
  ionViewDidLoad()
  {
    this.fdb.getEvents().on('value',resp => {
    console.log("In events array");
     console.log(resp);
    this.events = [];
    this.events = snapshotToArray(resp);
    }); 
  
  }
  
  gotoDetails(item)
  {
    this.navCtrl.push(DriveDetailsPage,{"details":item});
  }
  
}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    
    snapshot.forEach(childSnapshot => {
    
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        //console.log(item.key);
        returnArr.push(item);
    });

    return returnArr;
};
