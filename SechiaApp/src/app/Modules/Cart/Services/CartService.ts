import {Injectable} from "@angular/core";
import {BaseService} from "../../Base/BaseService";
import {ShoppingCart} from "../Models/ShoppingCart";
import {ShoppingCartItem} from "../Models/ShoppingCartItem";

@Injectable({
  providedIn:'root'
})
export class CartService extends BaseService{


  postCart(newCart: ShoppingCart)
  {
    return this.post('cart', newCart)
  }
  postCartItem(itemCart: ShoppingCartItem)
  {
    return this.post('item',itemCart);
  }
  getCart()
  {
    return this.get<ShoppingCart[]>('cart');
  }
}
