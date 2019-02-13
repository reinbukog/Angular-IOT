import { Injectable } from '@angular/core';
import { FirebaseService} from '../../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseService:FirebaseService,
              private router:Router) {
  }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {

    //console.log('can act')
    //if (!this.firebaseService.isAuthenticatedMethod())
    //{
    //  console.log('non');
    //  this.router.navigate(['/login']);
    //}
    //else {
    //  console.log('true');
    //  return true;
    //}
    return true;
  }


  //canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> {
  //  console.log('can activate');
  //
  //  //return this.firebaseService.isAuthenticated.map(authenticated => {
  //  // console.log('check this here');
  //  // if (!authenticated) {
  //  //   console.log('hello');
  //  //   this.router.navigate(['/login']);
  //  // } else {
  //  //   console.log('hi');
  //  // }
  //  //
  //  // return authenticated;
  //  //});
  //  //console.log('canactivate');
  //  //if (!this.firebaseService.isAuthenticated() && !this.firebaseService.hasAuthUser()){
  //  //  this.router.navigate(['/login']);
  //  //}
  //  //else{
  //  //  return true;
  //  //}
  //
  //  return this.firebaseService.isAuthenticated.map(authenticated => {
  //    debugger;
  //    console.log('check');
  //    if (!authenticated) {
  //      console.log('check1');
  //      this.router.navigate(['/login']);
  //    }
  //    else{
  //      console.log('check2');
  //      return true;
  //    }
  //  });
  //
  //  //return this.firebaseService.isAuthenticated;
  //}
}


