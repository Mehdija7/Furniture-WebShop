import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerAdd} from "../Models/CustomerAdd";
import {Customer} from "../Models/Customer";
import {BaseService} from "../../Base/BaseService";
import {SellerAdd} from "../Models/SellerAdd";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends BaseService {

  registerCostumer(newCustomer: CustomerAdd) {
    return this.post('register/customer', newCustomer)
  }
  registerSeller(newSeller: SellerAdd)
  {
    return this.post('register/seller', newSeller)
  }
}

