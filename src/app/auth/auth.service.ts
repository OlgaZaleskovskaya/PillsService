import * as firebase from 'firebase';
export class AuthService {
  token: string;
  onSignUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch (
      error => console.log(error)
    );
  }

  onSignIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
      })
      .catch (
      error => console.log(error)
    );
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }
}
