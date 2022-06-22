import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/models/cart.class';
import { Items } from 'src/models/items.class';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {



  items = new Items();

  /**
   * variable für Sachen ein und ausblenden
   */
  public show: boolean;


  constructor(private cartService: CartService) { 
    this.show = true;

  }

  ngOnInit(): void {
  }

  addToCart(item: any) {
    let itemInCart = this.cartService.cart.cartItems;

    if(itemInCart.includes(item)) {
      item.amount++;
    } else {
      itemInCart.push(item);
      console.log(itemInCart);
    }
    
    this.cartService.sum();
  }

}
