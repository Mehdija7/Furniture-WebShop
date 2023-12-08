import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ShoppingCartItem} from "../../Cart/Models/ShoppingCartItem";
import {Product} from "../Models/Product";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {


  private selectedProductsSource = new BehaviorSubject<any[]>([]);
  selectedProducts$ = this.selectedProductsSource.asObservable();

  addSelectedProductToList(product: any)
  {
    const selectedProducts=this.selectedProductsSource.value;
    selectedProducts.push(product);
    this.selectedProductsSource.next(selectedProducts);
  }
  deleteSelectedProduct(index:number)
  {
    var list=[] as Product[];
    this.selectedProducts$.subscribe(i=>
    {
      list=i;
    })
    list.splice(index,1);
  }
  private cartItemsSource = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  addCartItem(cartitem:any)
  {
    const cartItems=this.cartItemsSource.value;
    cartItems.push(cartitem);
    this.cartItemsSource.next(cartItems);
  }
  updateCartItem(productId:number)
  {
    var list=[] as ShoppingCartItem[];
    this.cartItems$.subscribe(i=>
    {
      list=i;
    })
    var item=list.find(i=>i.productId==productId) as ShoppingCartItem;
    item.quantity+=1;
  }
  deleteAllShoppingCartItems()
  {
    var list=[] as Product[];
    this.selectedProducts$.subscribe(i=>
    {
      list=i;
    })
    list.splice(0,list.length);

    var list2=[] as ShoppingCartItem[];
    this.selectedProducts$.subscribe(i=>
    {
      list2=i;
    })
    list.splice(0,list2.length);

  }
  constructor() { }
}
