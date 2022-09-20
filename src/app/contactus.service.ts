import { Injectable } from '@angular/core';
import { Contactus } from './contactus';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }
  contact: Contactus[] = [
    {
     
      name: 'Samsung',
      phonenumber: '3245678',
      details: 'sfdghjk',
      gmail:'sfdgh',
      img: 'https://th.bing.com/th/id/OIP.fbJktvTY6j5ZEkcL6R7BZAHaEg?pid=ImgDet&rs=1'
    }
   
  ];

  public getContactDetails(): any {
    // const contactObservable = new Observable(observe => 
  

      const microObservable = new Observable(observe => {
        setTimeout(() => {
          observe.next(this.contact);
        }, 1000);
      });
      return microObservable;
    }
 

}
