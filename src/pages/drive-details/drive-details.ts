import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-drive-details',
  templateUrl: 'drive-details.html'
})
export class DriveDetailsPage {

    ref = firebase.database().ref('events/');
    data: any = {};
    events=[];
  constructor(public navCtrl: NavController, public navParams : NavParams) {
  
  this.data = this.navParams.get("details");
  var uid = this.data.uid;
  
  console.log(firebase.auth().currentUser.uid);
  }
  
  onApply()
  {
        var reference = firebase.database().ref('events/' + this.data.uid + '/applicants/');
        //push(firebase.auth().currentUser.uid);
        
        reference.on('value', resp => {
    
    
   var uarr = getValues(resp);
   console.log(uarr);
   var s = uarr.find((x) => x === firebase.auth().currentUser.uid);
   
   if(s)
   {
        console.log("Already Applied");
   }
   else
   {
        reference.push(firebase.auth().currentUser.uid);
   }
   alert("Use proper alert controller Applied Successfully");
   this.navCtrl.setRoot(HomePage);
  });
        
        
  }
  
}

export const getValues = snapshot => {
    let returnArr = [];

    
    snapshot.forEach(childSnapshot => {
    
        let item = childSnapshot.val();
        //item.key = childSnapshot.key;
        //console.log(item.key);
        returnArr.push(item);
    });

    return returnArr;
};