import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MonitorComponent } from './monitor/monitor.component';
import { RouterModule, Routes } from '@angular/router';

import '../styles/font-awesome/font-awesome.min.css';
import '../styles/bootstrap/bootstrap.min.css';
import '../styles/animate/animate.min.css';
import { RegisterComponent } from './register/register.component';

const routes: Routes = <Routes>[
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'monitor',
    component: MonitorComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MonitorComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
