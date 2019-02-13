import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private books: Observable<any>;
  private currentAuthUser;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private db: AngularFireDatabase,
    private auth: AngularFireAuth
  ) {}

  getData(dataParamPath: string): Observable<any>{
    this.books = this.db.object(dataParamPath).valueChanges();
    return this.books;
  }

  saveData(reference: string, value: {}) {
    const dbRef = this.db.object(reference);
    dbRef.set(value);
  }

  registerUser(email: string, password: string): Promise<any> {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  isAuthenticatedMethod(): boolean {
    //this.auth.auth.onAuthStateChanged(user => {
    //  console.log('what?');
    //  this.currentAuthUser = user;
    //  console.log(JSON.stringify(this.currentAuthUser));
    //});

    if (this.auth.auth.currentUser == null ) console.log('equal to null');

    return this.auth.auth.currentUser != null;
  }

  hasAuthUser(): boolean {
    console.log('hasAuthUser');
    console.log(JSON.stringify(this.currentAuthUser));
    return this.currentAuthUser != null;
  }

  setAuthLoggedIn() {
    this.isAuthenticatedSubject.next(true);
  }

  setAuthLoggedOut() {
    this.isAuthenticatedSubject.next(false);
  }
}