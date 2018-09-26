import {Component, OnInit} from '@angular/core';

import * as firebase from 'firebase';


import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

title = 'app';
private addressList;
addressForm: FormGroup;
phoneForm: FormGroup;
toPills = true;

constructor() {
}

ngOnInit(): void {
  firebase.initializeApp({
  apiKey: 'AIzaSyAk1XSfCF0wg9Y7NpYH1meGkEDEvj12Z2Q',
  authDomain: 'maccabi-b2bd7.firebaseapp.com'
});
this.addressForm = new FormGroup({
  'city': new FormControl(null),
  'street': new FormControl(null),
  'building': new FormControl(null),
  'phone': new FormControl(null)

});
this.phoneForm = new FormGroup({
  'phone': new FormControl(null),
  'mail': new FormControl(null)
});
}

redirectToPillsPage(direction: boolean) {
  this.toPills = false;
}

}
