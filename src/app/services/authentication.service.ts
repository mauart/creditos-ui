import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth) { }
  signin(email: any, password: any) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  signup(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  logout() {
    return this.afAuth.auth.signOut();
  }
  authStateChange() {
    return this.afAuth.authState;
  }
  getActiveUser() { return this.afAuth.auth.currentUser; }
}
