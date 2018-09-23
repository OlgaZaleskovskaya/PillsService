import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('appearState', [
      state('first', style({
        transform: 'scale(0.1)',
        opacity: '0',
        fontSize: '0.5rem'
      })),
      state('second', style({
        transform: 'scale(1)',
        opacity: '1',
        fontSize: '1rem'
      })),
      transition('first => second', animate('1000ms 100ms linear')),
      transition('second => first', animate('1000ms 1ms linear'))
    ])
  ]
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
             ) { }
  email: string;
  password: string;
  isRegistered = false;
  toAppear = 'first';
  leavePage = false;
  direction: string;
  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    console.log('signup');
    this.email = form.value.mail;
    this.password = form.value.mail;
    this.authService.onSignUp(this.email, this.password).then(
      (response) => {
        console.log('registration');
        this.isRegistered = !this.isRegistered;
        this.toAppear = 'second';
      }
    ).catch(error => {
      console.log('error', error);
    });
  }

  toRoot() {
   this.isRegistered = false;
   this.toAppear = 'first';
   this.leavePage = true;
    this.direction = 'toRoot';
 }
  animationStarted($event) {
    console.log('Animation Start 1, toApear= ', this.toAppear);
    console.log('Animation Start 1, isRegistered= ', this.isRegistered);
  }

  animationDone($event) {
    if (this.leavePage) {
      if (this.direction === 'toRoot') {
        this.router.navigate(['/']);
      } else if (this.direction === 'toLogin') {
        this.router.navigate(['home']);
      }
    }
  }
toLogin() {
    this.authService.onSignIn( this.email, this.password).then((response) => {
     this.toRoot();
      this.direction = 'toLogin';
    });
}
test() {
  this.toAppear = 'second';
}

}
