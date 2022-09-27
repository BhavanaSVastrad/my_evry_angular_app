import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

//Cart count
import { CartService } from '../cart.service';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth:boolean=false;
  admin:boolean =false;
  cartCount: number=0;
  title="ToyMart"
  public image="https://dcassetcdn.com/design_img/1580/1427/1427_13937_1580_image.jpg";
  
  
  constructor(private authService:UserService,private cartSvc:CartService, private adminService: AdminService) { }
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
    //Admin Service
    this.adminService.adminSubject.subscribe(
      data => {
        console.log('admin inside nav component: ' + data);
        this.admin = data;
      }
    );
    //Cart count
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
  }

}
