import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  //function for gfetting checklist from database
  getToDoList() {
    const uid = localStorage.getItem("uid");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/');
    return this.toDoList;
  }

  //function for adding new created checklist to database
  addTitle(title: string, itemlist: string[]) {
    const uid = localStorage.getItem("uid");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/');
    this.toDoList.set(title,{
      task_list: itemlist,
      title: title
    });
  }
}
