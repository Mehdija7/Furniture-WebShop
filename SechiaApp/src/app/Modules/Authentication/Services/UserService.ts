import {Injectable} from "@angular/core";
import {BaseService} from "../../Base/BaseService";
import {SellerAdd} from "../Models/SellerAdd";
import {ProductPost} from "../../Seller/Models/ProductPost";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";
import {Customer} from "../Models/Customer";



@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  getSellers() {
    return this.get<[SellerAdd]>( 'user/sellers' )
  }
  deleteSeller(selectedSellerEmail: string) {
    return this.post('user/seller/delete', selectedSellerEmail)
  }
  getCustomer(id: Number)
  {
    return this.get<Customer>(`user/customer/${id}`)
  }
}
