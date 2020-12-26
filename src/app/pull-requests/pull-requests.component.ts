import { Component, OnInit } from '@angular/core';
import { FirepullService } from 'src/app/services/firepull.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.css'],
  providers: [FirepullService]
})
export class PullRequestsComponent implements OnInit {

  listarray: any = [];
  checklistarray: any = [];
  temp: any = [];
  temp2: any = [];
  constructor(private firepullservice: FirepullService, private router: Router) { }

  ngOnInit() {
    //console.log(localStorage.getItem("uid"));

    this.listarray = this.firepullservice.getpullrequest().snapshotChanges()
    .subscribe(item => {
      this.listarray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
       // console.log(x);
        // x["$key"] = element.key;
        this.listarray.push(x);
      console.log(this.listarray);

      })
      //console.log(this.listarray);

      // for (let i = 0; i < this.listarray.pullRequest_CheckList.length(); i++) {
      //   this.checklistarray.push(this.listarray.pullRequest_CheckList[i]);

      // }

      this.temp.push(this.listarray[0].pullRequest_CheckList);
      //this.temp2.push(Object(this.temp)["0"]);
      this.temp2 = Object(this.temp)["0"];
      console.log(this.temp2);
      for (let i = 0; i < this.temp.length(); i++) {
        for (let j = 0; j<this.temp[i].length(); j++){
          this.checklistarray.push(this.temp[i].j);
        }


      }
      //this.checklistarray.push(this.temp[0]);
      console.log(this.checklistarray);
    })
  }


}
