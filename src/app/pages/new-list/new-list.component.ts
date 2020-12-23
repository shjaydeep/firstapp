import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css'],
  providers : [TodoService]
})
export class NewListComponent implements OnInit {
  toDoListArray: any[];
  itemlist: string[]=[];
  constructor(private toDoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })

      //sort array isChecked false  -> true and all
        this.toDoListArray.sort((a,b) => {
          return a.isChecked - b.isChecked;
        })
    });
  }

  makearray(item){
    console.log(item.value);
    this.itemlist.push(item.value);
    console.log(this.itemlist);
    item.value = null;
  }
  onAdd(itemTitle) {

    this.toDoService.addTitle(itemTitle.value, this.itemlist);
    itemTitle.value = null;
    this.router.navigate(['/lists']);
  }

  alterCheck($key: string,isChecked) {
    this.toDoService.checkOrUnCheckTitle($key,!isChecked);
  }

  onDelete($key : string){
    this.toDoService.removeTitle($key);
  }


}
