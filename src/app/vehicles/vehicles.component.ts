import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  products = [{
    "pid": '1',
    "image": "https://5.imimg.com/data5/SELLER/Default/2021/6/UF/CB/GO/9616295/children-electric-toy-car-500x500.jpg",
    "pname": "Car",
    "pdescription": "UROPHA SPEED RED CAR KT SMALL  Remote Control (Red, Pack of: 1)",
    "price": "1000",
    "Status": "In Stock"

  },
  {
    "pid": '2',
    "image": "https://static.langimg.com/thumb/msid-73513632,imgsize-585469,width-540,height-405,resizemode-75/amazontoy-cars-40-73513632.jpg",
    "pname": "Jeep",
    "pdescription": "Thakran Thakran Kids battery operated ride on Jeep car with remote control  (Blue)",
    "price": "2500",
    "Status": "Out of Stock"
  },

  {
    "pid": '3',
    "image": "https://m.media-amazon.com/images/I/71hrCgLi6VL._SL1477_.jpg",
    "pname": "Aeroplane",
    "pdescription": "Bestoys Airbus A380 Airplane Toy Small Remote Control (Multicolor, Pack of: 1)",
    "price": "4000",
    "Status": "In Stock"
  },
  {
    "pid": '4',
    "image": "https://rukminim1.flixcart.com/image/832/832/kcjexe80/electric-ride-on/t/f/2/mini-police-bike-premium-kids-ride-on-motorcycle-6v-toy-battery-original-imaftmhu95xfzg5c.jpeg?q=70",
    "pname": "Bike",
    "pdescription": "PP INFINITY Police motorcycle for Kids Bike Battery Operated Ride On  (Red)",
    "price": "2000",
    "Status": "Out of Stock"
  },
  {
    "pid": '5',
    "image": "https://m.media-amazon.com/images/I/41zL9-nfeLL.jpg",
    "pname": "Police Car",
    "pdescription": "GoodsNet Bump & Go 3D Lights Police car with Sound and Lights on Wheel(White)",
    "price": "1500",
    "Status": "In Stock"
  }
    ,
  {
    "pid": '6',
    "image": "https://rukminim1.flixcart.com/image/832/832/km6mxe80/vehicle-pull-along/z/a/z/fire-rescue-truck-play-vehicles-fire-truck-fire-engine-toys-original-imagf4yksqaba2fh.jpeg?q=70",
    "pname": "Fire Engine ",
    "pdescription": "SR Toys fire Rescue  fire Truck fire Engine Toys Scale Truck Simulation(Red)",
    "price": "3000",
    "Status": "In Stock"
  },
  {
    "pid": '7',
    "image": "https://cdn.shopify.com/s/files/1/0088/7986/5907/products/Dickie-Recycling-Truck-Vehicles-Dickie-Toycra_938x938.jpg?v=1647963909",
    "pname": "Truck",
    "pdescription": "DICKIE TOYS ACTION SERIES RECYCLE TRUCK  (Green, Pack of: 1)",
    "price": "4000",
    "Status": "Out of Stock"
  },
  {
    "pid": '8',
    "image": "https://rukminim1.flixcart.com/image/832/832/km9ht3k0/vehicle-pull-along/5/y/c/small-size-jcb-earth-mover-plastic-toy-3-years-kids-2-in-1-and-original-imagf6nfzwzpg2kk.jpeg?q=70",
    "pname": "Bulldozer ",
    "pdescription": "Lego 42131 Technic App-Controlled Cat D11 Bulldozer Remote Control (Yellow)",
    "price": "4500", 
    "Status": "Out of Stock"
  },
  {
    "pid": '9',
    "image": "https://m.media-amazon.com/images/I/71zliuSIhVL._AC_SL1500_.jpg",
    "pname": "Toy Train",
    "pdescription": "Train with Track & Signals Battery Operated Train Toy For Kids  (Multicolor, Pack of: 1)",
    "price": "6000",
    "Status": "In Stock"
  }


  ]
  getColor() {
    return 'limegreen';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
