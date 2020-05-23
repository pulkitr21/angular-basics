import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(){
    return [
      {
        "id":"1332",
        "name":"watch",
        "brand":"timex",
        "price":7000
      },
      {
        "id":"1003",
        "name":"T.V",
        "brand":"Samsung",
        "price":46000
      },
      {
        "id":"5668",
        "name":"AC",
        "brand":"LG",
        "price":34000
      },
      {
        "id":"4532",
        "name":"Phone",
        "brand":"OnePlus",
        "price":35000
      }
    ]

  }
  constructor() { }
}
