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

    this.listarray = this.firepullservice.getpullrequest().snapshotChanges()
    .subscribe(item => {
      this.listarray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        this.listarray.push(x);


      })

      this.temp.push(this.listarray[0].pullRequest_CheckList);

      this.temp2 = Object(this.temp)["0"];
      for (let i = 0; i < this.temp.length(); i++) {
        for (let j = 0; j<this.temp[i].length(); j++){
          this.checklistarray.push(this.temp[i].j);
        }
      }
    })
  }
}
