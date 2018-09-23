import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../../../shared/userInfo.service';
import {Contacts} from '../../../shared/contacts.model';
import {Address} from '../../../shared/address.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../../shared/user.model';
@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {
 public currentUser: User;
  public mode: string;
  private subscription;

  constructor(private userService: UserInfoService,
             private route: ActivatedRoute,
              private router: Router ) {
    this.currentUser = new User('', '' , [ ] );
  }
  ngOnInit() {
this.userService.loadUserFromServer().subscribe((response) => {
  console.log('address on init');
  console.log(response);
  this.currentUser = this.userService.getUserInfo();
});
    console.log(this.currentUser);

 /*  console.log('address component onInit');
   this.subscription = this.userService.userInfoChanged.subscribe((user: User) => {
     console.log('on subscription');
     this.currentUser = user;
     this.phoneNumber = user.phone;
     console.log(this.phoneNumber);
     this.email = user.mail;
     this.addresses = user.addressList;
   })
  ;*/
}



  onEdit() {
    this.mode = 'edit';
    this.router.navigate(['/home/address/', 'edit' ]);
  }

}
