import { Component, OnInit } from '@angular/core';
import { FirepullService } from 'src/app/services/firepull.service';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-pullrequest',
  templateUrl: './pullrequest.component.html',
  styleUrls: ['./pullrequest.component.css'],
  providers: [FirepullService]
})
export class PullrequestComponent implements OnInit {
  listarray: any = [];
  map = new Map<string, string>();

  constructor(private firepullservice: FirepullService, private router: Router) { }

  ngOnInit() {

    this.listarray = this.firepullservice.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.listarray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
       // console.log(x);
        // x["$key"] = element.key;
        this.listarray.push(x);
      })
      for (let x = 0; x < this.listarray.length; x++) {

        this.map.set(this.listarray[x],"false");

       }
   // console.log(this.toDoService.getToDoList());
   console.log(this.listarray);
    })


    // console.log(this.map);
    }

  onAdd(pullname, projectname) {
    console.log(this.map);
    this.firepullservice.addTitle(pullname.value, projectname.value, this.map);
    pullname.value = null;
    projectname.value = null;
    this.router.navigate(['/lists']);
  }

  alterCheck(key: string) {
    const a =  this.listarray.findIndex(x => x === key);
   // console.log(a);
    this.map.set(this.listarray[a],"true");
    //console.log(this.map);
    //this.firepullservice.checkOrUnCheckTitle(a,!isChecked);
  }

  onDelete($key : string){
    this.firepullservice.removeTitle($key);
  }


}




















// this.listarray = this.firepullservice.getToDoList().snapshotChanges()
// .subscribe(item => {
//   this.listarray = [];
//   item.forEach(element => {
//     var x = element.payload.toJSON();
//     x["$key"] = element.key;
//     this.listarray.push(x);
//     console.log(this.listarray[1]);
//     this.listarray = this.listarray[1];
//     //this.listarray = this.listarray[1];

//   })

// // console.log(this.toDoService.getToDoList());


// })


// // this.firepullservice.getToDoList().snapshotChanges()
// // .subscribe(item => {
// //   this.listarray = [];
// //   item.forEach(element => {
// //     var x = element.payload.toJSON();
// //     x["$key"] = element.key;
// //     this.listarray.push(x);

// //   })

// //   //sort array isChecked false  -> true and all
// //     this.listarray.sort((a,b) => {
// //       return a.isChecked - b.isChecked;
// //     })
// // });
