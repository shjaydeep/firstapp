import { Component, OnInit } from '@angular/core';
import { FirepullService } from 'src/app/services/firepull.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pullrequest',
  templateUrl: './pullrequest.component.html',
  styleUrls: ['./pullrequest.component.css'],
  providers: [FirepullService]
})
export class PullrequestComponent implements OnInit {
  listarray: any = [];
  constructor(private firepullservice: FirepullService, private router: Router) { }

  ngOnInit() {
    this.firepullservice.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.listarray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listarray.push(x);
      })

      //sort array isChecked false  -> true and all
        this.listarray.sort((a,b) => {
          return a.isChecked - b.isChecked;
        })
    });

  }
  onAdd(itemTitle) {

    this.firepullservice.addTitle(itemTitle.value, this.itemlist);
    itemTitle.value = null;
    this.router.navigate(['/lists']);
  }

  alterCheck($key: string,isChecked) {
    this.firepullservice.checkOrUnCheckTitle($key,!isChecked);
  }

  onDelete($key : string){
    this.firepullservice.removeTitle($key);
  }


}
