import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData:any=[
    {'name':'Mahesh','age':25},
    {'name':'Shakti','age':23},
    {'name':'Krishna','age':23},
    {'name':'Radha','age':21}

  ]
  showData:boolean=false;

  constructor() { }

  ngOnInit(): void {
    console.log("Inside users component...");
    console.log(this.userData);
  }

}
