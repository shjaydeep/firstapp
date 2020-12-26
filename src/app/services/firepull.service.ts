import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirepullService {

  toDoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    const uid = localStorage.getItem("uid");
    const t = localStorage.getItem("title");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/'+t+'/task_list/');

    return this.toDoList;
  }

  getpullrequest() {
    const uid = localStorage.getItem("uid");
    const t = localStorage.getItem("title");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/'+t+'/PullRequest/');

    return this.toDoList;
  }

  getToDoListofchecklist() {
    const uid = localStorage.getItem("uid");
    const t = localStorage.getItem("title");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/'+t+'/task_list/');

    return this.toDoList;
  }

  addTitle(pullname: string, projectname: string, itemlist) {
    console.log(itemlist);
    const uid = localStorage.getItem("uid");
    const t = localStorage.getItem("title");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/'+t+'/PullRequest/');
    this.toDoList.set(pullname,{
     project_name:  projectname,
     pullRequest_name: pullname

     //pullRequest_CheckList: itemlist
    });
    let tasks = [];
    for (let key of itemlist.keys()) {
      //console.log("Map Keys= " +key);
      tasks.push(key);
  }
    let v = [];
  for (let value of itemlist.values()) {
    //console.log("Map Values= " +value);
         v.push(value);
}


  console.log(tasks);
  console.log(v);

  for (let i = 0; i < tasks.length; i++){
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/'+t+'/PullRequest/'+pullname+'/pullRequest_CheckList/');
    this.toDoList.set(i.toString(),{
      task_name: tasks[i],
      checked: v[i]
    });
  }

  }

  editchecklist(title: string, itemlist: string[]) {
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

  removeTitle(key: string) {
    const uid = localStorage.getItem("uid");
    const t = localStorage.getItem("title");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/'+t+'/task_list/');
    this.toDoList.remove(key);
  }

  updatetask(key: string, item: string){
    const uid = localStorage.getItem("uid");
    const t = localStorage.getItem("title");
    this.toDoList = this.firebasedb.list('users/'+uid+'/CheckList/'+t+'/task_list/');
    this.toDoList.update(key, {item});
  }

}


