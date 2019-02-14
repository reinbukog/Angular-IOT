import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showHeader: boolean = true;
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
