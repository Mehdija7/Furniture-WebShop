import { Component } from '@angular/core';
import {City} from "../../../Shared/Models/City";
import {CitiesService} from "../../../Shared/Services/CitiesService";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../Shared/Models/Product";
import {DataSharingService} from "../../../Shared/Services/data-sharing.service";
import {Customer} from "../../../Authentication/Models/Customer";
import {ShoppingCart} from "../../Models/ShoppingCart";
import {CartService} from "../../Services/CartService";
import {ShoppingCartItem} from "../../Models/ShoppingCartItem";
import {AuthenticationHelper} from "../../../Shared/Helpers/Authentication";
import {User} from "../../../Shared/Models/LoginInformation";
import {UserService} from "../../../Authentication/Services/UserService";


@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent {
  cartForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    address: new FormGroup({
      street: new FormControl('',[Validators.required]),
      cityId: new FormControl(0, [Validators.required])
    })
  });
  customer: Customer;
  customerId: number;
  c_id: string;
  user: User;
  isValidate: boolean;
  cities: City[]=[];
  postalCode=" ";
  private citiesService: CitiesService;
  private router: Router;
  private formSubmitted: boolean = false;
  cartItems: any;
  total: number=0;
  private selectedProducts: Product[];
  cart : ShoppingCart;
  cartService: CartService;
  userService: UserService;
  public shoppingCartItems : ShoppingCartItem[]=[];

  constructor(citiesService:CitiesService,cartService:CartService,userService:UserService,router:Router,private dataSharingService:DataSharingService) {
    this.citiesService=citiesService;
    this.router=router;
    this.cartService=cartService;
    this.userService=userService;
    this.fetchCities();
    this.fetchCustomerInfo();
  }
  ngOnInit()
  {
    this.dataSharingService.selectedProducts$.subscribe(products =>
    {
      this.cartItems=[];
      this.total=0;
      this.selectedProducts=products;
      for(let i=0;i<this.selectedProducts.length;i++)
      {
        this.cartItems.push(this.selectedProducts[i] as Product);
       // this.total+=this.selectedProducts[i].price;
      }
    });
    this.dataSharingService.cartItems$.subscribe(i=>
    {
      this.shoppingCartItems=i;
      this.calculateTotal();
    })

  }

  onSubmit() {

  }

  fetchCities() {
    this.citiesService.getCities().subscribe( cities => {
      this.cities = cities
      this.updatePostalCode()
    })
  }
  onCitySelected() {
    this.updatePostalCode()
  }

  private updatePostalCode() {
    this.postalCode = this.customer.address.city.postalNumber;
  }

  getSelectedCity(): City {
    let id = this.cartForm.controls.address.controls.cityId.value
    let city = this.cities.find((city) => {
      return city.id == id
    })
    return city as City
  }
  // isNameInvalid(): boolean {
  //   return this.isInvalid(this.cartForm.controls.name)
  // }
  //
  // isSurnameInvalid(): boolean {
  //   return this.isInvalid(this.cartForm.controls.surname)
  // }
  //
  // isEmailInvalid(): boolean {
  //   return this.isInvalid(this.cartForm.controls.email)
  // }
  //
  // isPhoneNumberInvalid(): boolean {
  //   return this.isInvalid(this.cartForm.controls.phoneNumber)
  // }
  //
  // isInvalid(formControl: FormControl): boolean {
  //   return formControl.invalid && (formControl.dirty || formControl.touched)
  // }
  //
  // isStreetInvalid() : boolean{
  //   return this.isInvalid(this.cartForm.controls.phoneNumber)
  // }

  Buy() {

    for(let i=0;i<this.shoppingCartItems.length;i++)
    {
      this.cartService.postCartItem(this.shoppingCartItems[i] as ShoppingCartItem).subscribe(()=>
      {
        console.log("CART ITEM",this.shoppingCartItems[i])
      })
    }
    let user = AuthenticationHelper.getLoginInfo().token.user.id;
     const cart= {
       customerId: user,
       items: this.shoppingCartItems,
       totalPrice: this.total
     }
    // for(let i=0;i<this.shoppingCartItems.length;i++)
    // {
    //   // @ts-ignore
    //   cart.items.push(this.shoppingCartItems[i] as ShoppingCartItem)
    // }
     console.log(cart)
     this.cartService.postCart(cart as ShoppingCart).subscribe(()=>
     {
       this.dataSharingService.deleteAllShoppingCartItems();
       alert("Narudzba uspjesno poslana");
       this.router.navigate(['/search']);

     })
  }
  findQuantity(x: any) : number {
    var item= this.shoppingCartItems.find(i=>i.productId==x.id);
    if(item!=undefined)
    {
      return item.quantity;
    }
    return 1;
  }

  private calculateTotal() {
    for(let i=0;i<this.shoppingCartItems.length;i++)
    {
      this.total+=this.cartItems[i].price*this.shoppingCartItems[i].quantity;
    }
  }

  private fetchCustomerInfo()
  {
    let user = AuthenticationHelper.getLoginInfo().token.user;
    this.userService.getCustomer(user.id).subscribe(c=> {
        this.customer = c;
      }
    )
  }
}
