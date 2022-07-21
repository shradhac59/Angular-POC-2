import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})
export class WellListComponent implements OnInit {
  wellList:any=[
    {'name':'testrls01','type':'rls','source':10001},
    {'name':'testesp01','type':'esp','source':100010},

    {'name':'testrls02','type':'rls','source':10001},
    {'name':'testrls03','type':'rls','source':10001},
    {'name':'testesp02','type':'esp','source':100010},
    {'name':'testesp03','type':'esp','source':100010},
]
data:any='';

getAddedWell(data:any){
  console.log(data);
  if(data){
    this.wellList.push(data);
  }

}

  constructor() { }

  ngOnInit(): void {
    console.log("Well list component");
    console.log(this.wellList);
  }
  goToAddWell(data:any){
    console.log('clicked',data);
    this.data=data.source;
    console.log(this.data);
  }

}
