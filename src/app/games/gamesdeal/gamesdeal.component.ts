import { Component, OnInit } from '@angular/core';
import * as wm from "../games.json";
@Component({
  selector: 'app-gamesdeal',
  templateUrl: './gamesdeal.component.html',
  styleUrls: ['./gamesdeal.component.css']
})
export class GamesdealComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  washingmach:any=(wm as any).default;

  
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-plus';
    }
    else{
      content='fa-solid fa-minus';
    }
    return content;
  }

}
