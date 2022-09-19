import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";
@Component({
  selector: 'app-toymart',
  templateUrl: './toymart.component.html',
  styleUrls: ['./toymart.component.css']
})
export class ToymartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
