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

    this.listarray = this.firepullservice.getToDoListofchecklist().snapshotChanges()
    .subscribe(item => {
      this.listarray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
       // console.log(x);
        // x["$key"] = element.key;
        this.listarray.push(x);
      })

   // console.log(this.toDoService.getToDoList());
   console.log(this.listarray);
    })


    // console.log(this.map);
    }

  onDelete(key : string){
    const a =  this.listarray.findIndex(x => x === key);
    this.firepullservice.removeTitle(a.toString());

  }

  update(key:string){
    const a =  this.listarray.findIndex(x => x === key);
    this.firepullservice.updatetask(a.toString(), key);
  }

}
