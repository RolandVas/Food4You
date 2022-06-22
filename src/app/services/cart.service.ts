import { Injectable, OnInit } from '@angular/core';
import { Cart } from 'src/models/cart.class';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new Cart();
  show = true;
  price = 0;

  constructor() {
  }


  sum() {
    this.price = 0; // muss zurückgesetzt werden sontst wird es doppelt gerechnet -> erste durchlauf 2 summe=2 -> zweite durchlauf 2 (von vorhert) + (2 + 4 -> 2 wird doppelt gerechnet)
    this.cart.cartItems.forEach((price: any) => {
      this.price += price.price*price.amount;
      this.show = false;
    });
    
  }
  
}
