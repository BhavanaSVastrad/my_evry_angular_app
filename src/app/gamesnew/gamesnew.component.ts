// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-gamesnew',
//   templateUrl: './gamesnew.component.html',
//   styleUrls: ['./gamesnew.component.css']
// })
// export class GamesnewComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import * as dolls from "../data/doll.json";
@Component({
  selector: 'app-dolls',
  templateUrl: './gamesnew.component.html',
  styleUrls: ['./gamesnew.component.css']
})
export class GamesnewComponent implements OnInit {
  ngOnInit(): void {
  }
  //Fetch the data from refrigerator.json using the alias refrigerator in line nnumber 4
  doll:any=(dolls as any).default;

  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
  
}
 

