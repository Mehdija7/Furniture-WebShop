import { ShoppingCart } from '../../Cart/Models/ShoppingCart';
import { CartService } from './../../Cart/Services/CartService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

  private cartService : CartService;
  public orders : ShoppingCart[]=[];
  constructor(cartService:CartService)
  {
    this.cartService=cartService;
    this.fetchOrders();
  }

  fetchOrders()
  {
    this.cartService.getCart().subscribe(o=>
      {
        console.log(o);
        this.orders=o as ShoppingCart[];
        console.log(this.orders);
      })
      console.log(this.orders[0].customerId)

  }
}
