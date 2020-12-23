import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {} from '@angular/router';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }
 uid = localStorage.getItem("uid");
  getToDoList() {


    // this.toDoList = this.firebasedb.list('users/'+this.uid+'/Checklist/');

    return this.toDoList;
  }

  addTitle(title: string, items: string) {
    this.toDoList = this.firebasedb.list('users/'+this.uid+'/Checklist/'+title);
    this.toDoList.push({
      title: title,
      task_list: items
    });
  }


  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
  }

  removeTitle($key: string) {
    this.toDoList.remove($key);
  }


}
