import { Component } from '@angular/core';
import { Product } from '../../Shared/Models/Product';
import { Router } from '@angular/router';
import { ProductService } from '../../Search/Services/ProductService';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  private router: Router;
  private productService: ProductService;

  products: Product[] = [];
  filteredProducts: Product[] = [];

  nameFilter: String = ""
  shoudShowNewProductForm = true

  constructor(router: Router, productService: ProductService) {
    this.router = router;
    this.productService = productService;
    this.fetchProducts()
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        this.filteredProducts = this.products
      }
    )
  }

  nameFilterChanged() {
    var newProductList = this.products
    if (this.nameFilter != null && this.nameFilter != undefined && this.nameFilter != "") {
      newProductList = newProductList.filter( 
        product => {
          let name = product.name.toLowerCase()
          let filter = this.nameFilter.toLocaleLowerCase()
          return name.includes(filter)
        }
      )
    }
    this.filteredProducts = newProductList
  }

  addProductClicked() {
    this.router.navigate(["product/add"])
  }
}
