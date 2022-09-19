import { Component, OnInit } from '@angular/core';
import * as allcategories from "../data/allcategories.json";
@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.css']
})
export class AllcategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(allcategories as any).default;
}
