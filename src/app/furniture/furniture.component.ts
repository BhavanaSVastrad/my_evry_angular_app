import { Component, OnInit } from '@angular/core';
import * as allcategories from "../data/allcategories.json";
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(allcategories as any).default;
}
