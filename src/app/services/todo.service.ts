import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    const uid = localStorage.getItem("uid");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/');
    return this.toDoList;
  }

  addTitle(title: string, itemlist: string[]) {
    const uid = localStorage.getItem("uid");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/');
    this.toDoList.set(title,{
      task_list: itemlist,
      title: title
    });
  }

  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
  }

  removeTitle($key: string) {
    this.toDoList.remove($key);
  }


}
