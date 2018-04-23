import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

/*
  Generated class for the FiredbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FiredbProvider {

  constructor() {
    console.log('Hello FiredbProvider Provider');
  }
  
  getEvents()
  {
    return firebase.database().ref('/events');
  }
  
  getColleges()
  {
    return firebase.database().ref('/colleges');
  }

}
