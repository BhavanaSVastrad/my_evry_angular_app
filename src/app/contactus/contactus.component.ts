import { Component, OnInit } from '@angular/core';
import { Contactus } from '../contactus';
import { ContactusService } from '../contactus.service';
import * as allprod from "../data/contactus.json";
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contact: Contactus[]=[];
  //constructor injection of the MicroovenService
  constructor(private microservice:ContactusService) { }

  ngOnInit(): void {
    const microObservable= this.microservice.getContactDetails();
    microObservable.subscribe((microData: Contactus[])=>{
      this.contact=microData;
    });
  }

  all:any=(allprod as any).default;

  
  

}
