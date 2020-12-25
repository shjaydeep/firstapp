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
      console.log(this.listarray);
    })
  }


}
