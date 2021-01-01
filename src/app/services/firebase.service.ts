import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth,  private router: Router) { }

  //function for siging in user
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true

      localStorage.setItem('uid',(res.user)["uid"])
      const a = localStorage.getItem('uid');

      this.router.navigate(['/lists']);
    })
  }

  //function for registering user
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('uid',(res.user)["uid"])
      const a = localStorage.getItem('uid');

      this.router.navigate(['/lists']);
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
