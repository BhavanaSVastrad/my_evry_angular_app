import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth:boolean=false;
  title="Toy-Mart"
  public image="https://dcassetcdn.com/design_img/1580/1427/1427_13937_1580_image.jpg";
  
  
  constructor(private authService:UserService) { }
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
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    // this.cartSvc.getCartItems().subscribe (     
    //   (response) =>
    //    {        
    //     this.cartCount=response.length;
    //     console.log(this.cartCount);
    //    }
    //  ) 
    // this.cartSvc.countSubject.subscribe (     
    //   (response) =>
    //    {        
    //     this.cartCount=response;
    //     console.log(this.cartCount);
    //    }
    //  ) 
  }

}
