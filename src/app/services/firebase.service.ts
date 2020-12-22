import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth,  private router: Router) { }
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
     // sessionStorage.setItem('id', (JSON.stringify(res.user)).id);
      //localStorage.setItem('user',JSON.stringify(res.user))
      localStorage.setItem('uid',(res.user)["uid"])
      const a = localStorage.getItem('uid');
      console.log(a);
      this.router.navigate(['/lists']);
    })
  }
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('uid',(res.user)["uid"])
      const a = localStorage.getItem('uid');
      console.log(a);
      this.router.navigate(['/lists']);
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
//   get isAuthenticated(): boolean {
//     return this.isAuthenticated !== null;
// }
//   get currentUserId(): string {
//     return this.isAuthenticated ? this.isAuthenticated.uid : null;
//   }
}
