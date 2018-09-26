import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserInfoService} from '../../../shared/userInfo.service';
import {User} from '../../../shared/user.model';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {

  public currentUser: User;
  public;
  mode: string;
  private subscription;

  constructor(private userService: UserInfoService,
              private route: ActivatedRoute,
              private router: Router) {
    this.currentUser = new User('', '', []);
  }

  ngOnInit() {
    this.userService.loadUserFromServer().subscribe((response) => {
      console.log('address on init');
      console.log(response);

      this.currentUser = this.userService.getUserInfo();
    });
    console.log(this.currentUser);
  }
  onEdit() {
    this.mode = 'edit';
   this.router.navigate(['home/editInfo'
      ]);
  }

}
