import {Component, EventEmitter,  OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../modules/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  @Output() onGoToPills = new EventEmitter<{ dir: boolean }>();

  private isLoggedIn: boolean;
  private toPillsPage: boolean;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLogOut() {
    this.authService.onLogOut();
  }

  test() {
    this.onGoToPills.emit({dir: true});
  }
}
