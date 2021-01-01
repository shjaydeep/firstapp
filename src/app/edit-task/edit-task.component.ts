import { Component, OnInit } from '@angular/core';
import { FirepullService } from 'src/app/services/firepull.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [FirepullService]
})
export class EditTaskComponent implements OnInit {
  listarray: any = [];
  constructor(private firepullservice: FirepullService, private router: Router) { }
  ngOnInit() {
    // getting the checklist from database and storing in listarray
    this.listarray = this.firepullservice.getToDoListofchecklist().snapshotChanges()
    .subscribe(item => {
      this.listarray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();

        this.listarray.push(x);
      })
    })
    }

    // making list of newly added tasks
    makearray(item){
      this.listarray.push(item.value);
      item.value = null;
      const oldtitle = localStorage.getItem('title');
      this.firepullservice.editchecklist(oldtitle ,this.listarray);
    }

     //function to delete task
  onDelete(key : string){
    const a =  this.listarray.findIndex(x => x === key);
    this.listarray.splice(a, 1);
    const localtitle = localStorage.getItem('title');
    this.firepullservice.editchecklist(localtitle, this.listarray);
  }

  //function to edit task
  update(key:string, newvalue:string){
    const a =  this.listarray.findIndex(x => x === key);
    this.listarray[a] = newvalue;
    const localtitle = localStorage.getItem('title');
    this.firepullservice.editchecklist(localtitle, this.listarray);
  }
}
