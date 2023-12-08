import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../../Models/Product';
import { Router } from '@angular/router';
import {DataSharingService} from "../../Services/data-sharing.service";

@Component({
  selector: 'app-product-grid-component',
  templateUrl: './product-grid-component.component.html',
  styleUrls: ['./product-grid-component.component.css']
})
export class ProductGridComponentComponent {

  @Input() products: Product[] = []
  @Output () newItemEvent = new EventEmitter<Product>();
  public items: any;
  public isAddedToWhishlist: boolean = false;
  public selectedProducts:Product[]=[];
  public isAdded:boolean=false;

  constructor(private router: Router, private dataSharingService: DataSharingService) {}

  createImgPath(serverPath: string)  {
    return `https://localhost:44362/${serverPath}`;
  }

  tapedProductWithId(id: number) {
    console.log(id)
    this.router.navigate(['product', id])

  }

  AddToCart(p: Product) {
    this.items.push(p);
  }
  addNewItem(product: Product)
  {
    this.isAdded=false;
    //this.newItemEvent.emit(value);
   this.dataSharingService.selectedProducts$.subscribe(p=>{
     this.selectedProducts=p;
   });

    for(let i=0;i<this.selectedProducts.length;i++)
    {
      if(product.id==this.selectedProducts[i].id)
      {
        this.isAdded=true;
        break;
      }
    }
    if(this.isAdded)
    {
      alert("Proizvod je vec dodan ");
      this.dataSharingService.updateCartItem(product.id);
    }
    else{
      alert("Proizvod uspjesno dodan");
      this.dataSharingService.addSelectedProductToList(product);
      const item={
        productId: product.id,
        quantity:  1
      }
      this.dataSharingService.addCartItem(item);
    }
  }

  addToWhishList(product: Product) {

  }


}
