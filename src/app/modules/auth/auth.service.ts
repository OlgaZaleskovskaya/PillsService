import * as firebase from 'firebase';
import {Subject} from 'rxjs';
export class AuthService {
  userActivated = new Subject();
  isLoggedIn = false;
  token: string;

  onSignUp(email: string, password: string) {
  return firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }

  onSignIn(email: string, password: string) {
    console.log('auth.serv onLogIn 1');
  return  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              this.token = token;
              this.isLoggedIn = true;
              console.log('auth.serv onLogIn 2');
            }
          );
      })
      .catch(
        error => {
          console.log('ошибка логина');
    console.log(error);
  }
      );
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  onLogOut() {
    firebase.auth().signOut().then(
      (response) => {
        this.isLoggedIn = false;
      }
      );
  }
}
