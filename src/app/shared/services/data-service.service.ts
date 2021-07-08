import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  productList = [{}];
  cartList: Array<[]> = [];
  constructor() {
    this.productList = [
      {
        item: 'Headache pills',
        itemCategory: 'Medicine',
        quantity: 5,
        price: 50,
      },
      {
        item: 'Sandwich',
        itemCategory: 'Food',
        quantity: 2,
        price: 200,
      },
      {
        item: 'Perfume',
        itemCategory: 'Imported',
        quantity: 1,
        price: 4000,
      },
      {
        item: 'Black Swan',
        itemCategory: 'Book',
        quantity: 1,
        price: 300,
      },
      {
        item: 'Classical Songs Collection',
        itemCategory: 'Music',
        quantity: 1,
        price: 500,
      },
      {
        item: 'Pants',
        itemCategory: 'Clothes',
        quantity: 2,
        price: 1200,
      },
    ];
  }

  addToCart(product: any) {
    debugger;
    var count = 0;
    product.quantity = 0;
    if (this.cartList.length == 0) {
      this.cartList.push(product);
    } else {
      this.cartList.forEach((item, index) => {
        debugger;
        if (item == product) {
          console.log(item);
          product.quantity = product.quantity + 1;
        } else {
          this.cartList.push(product);
        }
      });
    }
  }
}
