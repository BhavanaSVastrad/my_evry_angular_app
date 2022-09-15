import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title="Toy-Mart"
  public image="https://dcassetcdn.com/design_img/1580/1427/1427_13937_1580_image.jpg";
  
  onSearch()
  {
    alert("Will contact shortly");
  }

  
  productentered: string=' '

  //Event
  search_product(product_name:string):void{ 
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; 
    console.log(product_name)
  }
  ngOnInit(): void {
  }

}
