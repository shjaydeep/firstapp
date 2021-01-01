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

// function to get all items from database
    this.listarray = this.firepullservice.getpullrequest().snapshotChanges()
    .subscribe(item => {
      this.listarray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        this.listarray.push(x);
      })
    })
  }

    //function to nevigate to view pull request page
  nevigate(pullRequest_name: string){
    localStorage.setItem('pullRequest_name', pullRequest_name);
    this.router.navigate(['/pull-requests']);
  }
}
