import { Component, OnInit } from '@angular/core';
import { FirepullService } from 'src/app/services/firepull.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  providers: [FirepullService]
})
export class DashbordComponent implements OnInit {
  listarray: any = [];
  constructor(private firepullservice: FirepullService, private router: Router) { }

  ngOnInit() {


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
  nevigate(pullRequest_name: string){
    localStorage.setItem('pullRequest_name', pullRequest_name);
    this.router.navigate(['/pull-requests']);

  }


}
