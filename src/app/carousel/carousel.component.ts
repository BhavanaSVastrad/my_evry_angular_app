import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  mycolor = 'red';
  prod_array:string[]=['blue','shadow'];
  constructor() { }

  ngOnInit(): void {
  }

}
class products{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}