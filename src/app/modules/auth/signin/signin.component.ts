import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.mail;
    const password = form.value.password;
    this.authService.onSignIn(email, password).then((response) => {
      console.log('on signIn - signIn component');
      this.router.navigate(['home']);
    });

  }

  onRegister() {
    this.router.navigate(['signup']);
  }
}
