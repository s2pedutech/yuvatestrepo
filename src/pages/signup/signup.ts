import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import * as firebase from 'Firebase';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

    ref = firebase.database().ref('users/');
    refCities = firebase.database().ref('cities/');
    refColleges = firebase.database().ref('colleges/');
    user = [];
    users = [];
    cities = [];
    colleges = [];
    mycolleges = [];
    myuser:any = {};
    searchTerm: string = '';
    signUpForm : FormGroup;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
  
  this.ref.on('value', resp => {
    this.users = [];
    this.users = snapshotToArray(resp);
  });
  
  this.refCities.on('value', resp => {
    this.cities = [];
    this.cities = snapshotToArray(resp);
  });
  
  this.refColleges.on('value', resp => {
    this.colleges = [];
    this.colleges = snapshotToArray(resp);
  });
    
    this.signUpForm = formBuilder.group({
    firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    mobNo: ['', Validators.compose([Validators.pattern('^[6789]\\d{9}$'), Validators.required])],
    emailId: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'), Validators.required])],
    password : ['',Validators.compose([Validators.minLength(7), Validators.maxLength(15), Validators.required])],
    city: ['',Validators.compose([Validators.required])],
    college: ['',Validators.compose([Validators.required])]
    });
  }
  
  onSelectCity()
  {
    
  }
  
  setFilteredItems(mysearchTerm)
  {
    console.log('here');
    console.log(mysearchTerm);
    this.mycolleges = this.colleges.filter((item) => {
            return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        }); 
  }
  selectCollege(item)
  {
    console.log(item);
  }
  goToHome(params){
    
    // check if user exists in the firebase
    
    this.user = this.users.filter((x) =>{
    console.log(x);
  return x.mobno === this.signUpForm.controls['mobNo'].value || x.email === this.signUpForm.controls['emailId'].value;
  });
  
  
  console.log(this.user);
  if(this.user.length > 0)
  {
        alert("user already exists");
  }
  else
  {
        this.myuser.firstName = this.signUpForm.controls['firstName'].value;
        this.myuser.lastName = this.signUpForm.controls['lastName'].value;
        this.myuser.mobno = this.signUpForm.controls['mobNo'].value;
        this.myuser.email = this.signUpForm.controls['emailId'].value;
        this.myuser.password = this.signUpForm.controls['password'].value;
        
        this.myuser.city = this.signUpForm.controls['city'].value;
        this.myuser.college = this.signUpForm.controls['college'].value;
        //this.ref.push(this.myuser);
       
       firebase.auth().createUserWithEmailAndPassword(
        this.myuser.email,
        this.myuser.password
        ).then(
        newUser => {
            console.log(newUser.uid);
            this.ref.child(newUser.uid).set(this.myuser);
            this.navCtrl.setRoot(HomePage);
        }
        );
  }
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