import { Component, OnChanges, OnInit } from '@angular/core';
import { Cart } from 'src/models/cart.class';
import { Items } from 'src/models/items.class';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  

  constructor(public cartService: CartService) {
    
  }

  ngOnInit(): void {
  }

  addAmount(item: any) {
    item.amount++;
    this.cartService.sum();
  }

  removeAmount(item: any) {
    if(item.amount > 1) {
      item.amount--;
    }
    
    this.cartService.sum();
  }

  deleteAmount(i: any) {
    this.cartService.cart.cartItems.splice(i, 1)
    this.cartService.sum();
  }


  


}
