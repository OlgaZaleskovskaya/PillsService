import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../modules/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {
  private isLoggedIn: boolean;

  constructor(public authService: AuthService) {
  }

  ngOnInit() {

  }

  onLogOut() {
    this.authService.onLogOut();
  }


}
