import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  title = 'firebase-angular-auth';
  isSignedIn = false
  constructor(public firebaseService : FirebaseService){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false

  }
  getUserId() {
    return localStorage.getItem('uid');
  }
  if(isSignedIn){
    console.log("LOGGED IN")
  }
}

