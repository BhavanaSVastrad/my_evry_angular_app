import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
  displayval1="";
  displayval2="";

  getvalue(val1:string,val2:string){
    this.displayval1=val1;
    this.displayval2=val2;

  }
}
