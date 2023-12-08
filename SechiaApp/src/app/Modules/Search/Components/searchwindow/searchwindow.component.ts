import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ProductService} from "../../Services/ProductService";
import {Router} from "@angular/router";
import {Product} from 'src/app/Modules/Shared/Models/Product';
import {Category} from "../../../Seller/Models/Category";
import {Room} from "../../../Seller/Models/Room";
import * as _ from 'lodash'
import {isUndefined} from "lodash";
import {
  ProductGridComponentComponent
} from "../../../Shared/Components/product-grid-component/product-grid-component.component";
import {DataSharingService} from "../../../Shared/Services/data-sharing.service";
import {ShoppingCartItem} from "../../../Cart/Models/ShoppingCartItem";

@Component({
  selector: 'app-searchwindow',
  templateUrl: './searchwindow.component.html',
  styleUrls: ['./searchwindow.component.css']
})
export class SearchwindowComponent{
  //@ViewChild(ProductGridComponentComponent) productItems : Product[];
  private router: Router;
  private productService: ProductService;
  public isCartClicked: boolean = false;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  nameFilter: string = ""
  rooms: Room[] = []
  selectedCategory: any;
  selectedRoom: any;
  selected: any;
  public total: number=0;
  public cartItems: Product[] = [];
  selectedProducts: any[]=[];
  public shoppingCartItems: ShoppingCartItem[] =[];

  constructor(router: Router, productService: ProductService,private dataSharingService : DataSharingService) {
    this.router = router;
    this.productService = productService;
    this.fetchProducts()
    this.fetchCategories()
    this.fetchRooms()

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
       //this.total+=this.selectedProducts[i].price;
     }

   })
   this.dataSharingService.cartItems$.subscribe(items =>
   {
     this.shoppingCartItems=items;
     //this.calculateTotal();
   })

 }

  public calculateTotal() {
    for(let i=0;i<this.shoppingCartItems.length;i++)
    {
      this.total+=this.cartItems[i].price*this.shoppingCartItems[i].quantity;
    }
  }
  fetchProducts() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        /*this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(0) as Product)
        this.products.push(products.at(3) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(0) as Product)
        this.products.push(products.at(3) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(0) as Product)
        this.products.push(products.at(3) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(0) as Product)
        this.products.push(products.at(3) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(0) as Product)
        this.products.push(products.at(3) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(0) as Product)
        this.products.push(products.at(3) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(0) as Product)
        this.products.push(products.at(3) as Product)
        this.products.push(products.at(1) as Product)
        this.products.push(products.at(2) as Product)
        this.products.push(products.at(1) as Product)*/
        this.filteredProducts = this.products
      }
    )
  }

  nameFilterChanged() {
    return (this.nameFilter != null && this.nameFilter != undefined && this.nameFilter != "")
  }

  fetchCategories() {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  fetchRooms() {
    this.productService.getRooms().subscribe(rooms => {
      this.rooms = rooms
    })
  }


  filter() {
    var newList = this.products
    if (this.nameFilterChanged()) {
      newList = newList.filter(product =>
        product.name.toLowerCase().includes(this.nameFilter.toLowerCase())
      )
    }

    if (this.selectedCategory > 0) {
      newList = newList.filter(product =>
        product.category.id == this.selectedCategory
      )
    }

    if (this.selectedRoom > 0) {
      newList = newList.filter(product =>
        product.room.id == this.selectedRoom
      )
    }
    this.filteredProducts = newList
  }

  LoadCart() {
   this.isCartClicked=true;
  }

  Buy() {
  this.router.navigate(['cart']);
  }
  addItem(newItem: Product)
  {
    //this.dataSharingService.addSelectedProductToList(newItem);
  }

  findQuantity(x: any) : number {
    var item= this.shoppingCartItems.find(i=>i.productId==x.id);
    if(item!=undefined)
    {
      return item.quantity;
    }
    return 1;
  }

  deleteFromCart(x: number) {
   this.dataSharingService.deleteSelectedProduct(x);
  }
}
