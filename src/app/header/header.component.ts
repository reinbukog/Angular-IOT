import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FirebaseService } from '../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showHeader: boolean = true;
  status: string = 'STAT_OFF';
  previousStatus = this.status;
  currentStatus = this.status;
  alive: boolean = true;

  previousTime = new Date();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        if (event.url == '/login') {
          this.showHeader = false;
        }
        else {
          this.showHeader = true;
        }
      }
    });

    const sensorStatus = this.firebaseService.getData('sensor/status');
    sensorStatus.subscribe(stat => {
      this.currentStatus = stat;
    });

    IntervalObservable.create(10000)
      .takeWhile(()=> this.alive)
      .subscribe(() => {

        if (this.currentStatus == 'STAT_BOOT') {
          this.status = 'Booting';
          console.log('boot');
        }
        else if (this.currentStatus == 'STAT_OFF') {
          this.status = 'HW OFF';
          console.log('off');
        }

        else if (this.previousStatus != this.currentStatus) {
          this.status = 'Ready';
          console.log('ready');
        }
        else {
          this.status = 'HW OFF';
          console.log('off');
          const statObject = {
            status: 'STAT_OFF'
          };
          this.firebaseService.saveData('sensor', statObject);
        }

        this.previousStatus = this.currentStatus;
      });
  }

  onLogout() {
    console.log('logout');
    this.firebaseService.logout()
    .then((data) => {
      console.log('successful logout');
      this.router.navigate(['/login']);
    })
    .catch((error) => {
      console.log('error logout');
    });
  }
}
