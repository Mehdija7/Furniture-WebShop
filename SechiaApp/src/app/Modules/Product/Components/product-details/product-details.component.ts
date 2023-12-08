import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from 'src/app/Modules/Search/Services/ProductService';
import { Product } from 'src/app/Modules/Shared/Models/Product';
import {DataSharingService} from "../../../Shared/Services/data-sharing.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productId = 0
  product: Product
  public isAddedToWhishlist: boolean = false;
  public counter: number=0;
  selectedProduct : Product;
  public isAdded:boolean=false;
  public selectedProducts:Product[]=[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private dataSharingService: DataSharingService,
    private router:Router
  ) {
    activatedRoute.params.subscribe(params => {
      this.productId = params['id']
      console.log(this.productId)
      this.fetchProductDetails()
    })
  }

  fetchProductDetails() {
    this.productService.getProductById(this.productId).subscribe(res => {
      this.product = res
    })
  }

  createImgPath(serverPath: string)  {
    return `https://localhost:44362/${serverPath}`;
  }

  addToWhishList(product: Product) {
    if(this.counter%2==0)
    {
      this.isAddedToWhishlist=true;
    }
    else
    {
      this.isAddedToWhishlist=false;
    }
   this.counter++;
  }

  addItem() {
    this.selectedProduct=this.product;
    this.isAdded=false;

    this.dataSharingService.selectedProducts$.subscribe(p=>{
      this.selectedProducts=p;
    });

    for(let i=0;i<this.selectedProducts.length;i++)
    {
      if(this.product.id==this.selectedProducts[i].id)
      {
        this.isAdded=true;
        break;
      }
    }
    if(this.isAdded)
    {
      alert("Proizvod je vec dodan ");
      this.dataSharingService.updateCartItem(this.product.id);
    }
    else{
      alert("Proizvod uspjesno dodan");
      this.dataSharingService.addSelectedProductToList(this.product);
      const item={
        productId: this.product.id,
        quantity:  1
      }
      this.dataSharingService.addCartItem(item);
    }
  }
}
