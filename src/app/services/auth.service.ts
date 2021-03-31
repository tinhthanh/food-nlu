import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  async googleSignIn(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await  this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }
  private  updateUserData({uid, email, displayName, photoURL}: User) {
    const userRef: AngularFirestoreDocument<User> =  this.afs.doc(`users/${uid}`);
    userRef.get().subscribe( user => {
      const data = {
        uid,
        email,
        photoURL,
        displayName,
        auto: false,
        doubly: 5,
        followByCommand: 'follow_bet',
        online: false,
        balance: "",
      };
      if(user.exists) {
         let u  = user.data();
         data.auto = u.auto ;
         data.doubly = u.doubly;
         data.followByCommand = u.followByCommand;
         data.online =  u.online;
         data.balance = u.balance;
      }
      return userRef.set(data, {merge: true});
    });
  }
  async signOut() {
    await this.afAuth.signOut();
  }
}

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  somethingCustom?: string;
  auto?: boolean;
  doubly?: number;
  followByCommand?: string;
  online?: boolean ;
  balance?: string;
}
