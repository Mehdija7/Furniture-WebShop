import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from "../../Base/BaseService";
import {ProductGet} from "../Models/ProductGet";
import {ProductPost} from "../../Seller/Models/ProductPost";
import { Category } from '../../Seller/Models/Category';
import { Room } from '../../Seller/Models/Room';
import { Product } from '../../Shared/Models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  getProducts() {
    return this.get<[Product]>('products')
  }

  getProductById(id: Number) {
    return this.get<Product>(`products/${id}`)
  }

  postProduct(newProduct: ProductPost) {
    return this.post('products', newProduct)
  }

  getCategories() {
    return this.get<[Category]>('categories')
  }

  postCategory(newCategory: string)
  {
    return this.post('categories', newCategory)
  }

  getRooms() {
    return this.get<[Room]>('rooms')
  }
  postRoom(newRoom: string){
    return this.post('rooms',newRoom)
  }
}
