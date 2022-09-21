import { Injectable } from '@angular/core';
import { Contactus } from './contactus';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }
  contact: Contactus[] = [
   
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
