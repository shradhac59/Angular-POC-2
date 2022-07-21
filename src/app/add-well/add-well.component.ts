import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-well',
  templateUrl: './add-well.component.html',
  styleUrls: ['./add-well.component.scss']
})
export class AddWellComponent implements OnInit {
  @Input() hero:any;
  @Output() getAddedWell: EventEmitter<any>=new EventEmitter();
  wellData:any={};


  constructor() { }

  ngOnInit(): void {
    console.log('hero',this.hero);

  }
  addWell(){
    this.wellData.source=this.hero;
    console.log(this.wellData);
    this.getAddedWell.emit(this.wellData);
    this.wellData={};
    this.hero='';


  }

}
