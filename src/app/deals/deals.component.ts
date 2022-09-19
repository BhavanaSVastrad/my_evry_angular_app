import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor() { }
  //Input Class Decorator
  @Input()product:any

  ngOnInit(): void {
  }
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
      content='fa fa-arrow-down';
    }
    else{
      content='fa fa-arrow-up';
    }
    return content;
  }
 like=false;
 showliketoggle()
 {
  this.like=!this.like;
 }
 togglelike(){
  var content='';
  if(this.like){
    content='fa-solid fa-heart fa-2x';
  }
  else{
    content='fa-regular fa-heart fa-2x';
  }
  return content;
 }
}
