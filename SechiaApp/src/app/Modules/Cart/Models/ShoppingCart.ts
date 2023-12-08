import {ShoppingCartItem} from "./ShoppingCartItem";

export interface ShoppingCart
{
  customerId : number;
  items      : ShoppingCartItem[];
  totalPrice : number;
}
