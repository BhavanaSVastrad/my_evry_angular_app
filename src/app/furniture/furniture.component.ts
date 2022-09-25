import { Component, OnInit } from '@angular/core';
import * as doll from "../data/furniture.json";
@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doll:any=(doll as any).default;
}
