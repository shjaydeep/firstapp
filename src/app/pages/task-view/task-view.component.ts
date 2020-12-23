import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
  providers : [TodoService]
})
export class TaskViewComponent implements OnInit {
  listarray: any = [];
  constructor(private toDoService: TodoService, private router: Router) { }

  ngOnInit() {
    //console.log(localStorage.getItem("uid"));

    this.listarray = this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.listarray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarray.push(x);
      })
   // console.log(this.toDoService.getToDoList());
   console.log(this.listarray);
    })
  }
  nevigate(title: string){
    localStorage.setItem('title', title);
    this.router.navigate(['/addpullrequest']);
  }
}
