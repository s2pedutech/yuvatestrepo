import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

    ref = firebase.database().ref("gallery/");
    gallery = [];
    images = ["logo.png","logo.png","logo.png","logo.png"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
    
    this.ref.on('value',resp => {
    console.log("In gallery array");
     console.log(resp);
    this.gallery = [];
    this.gallery = snapshotToArray(resp);
    console.log("Gallery");
    console.log(this.gallery);
    });
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