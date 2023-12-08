import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../Search/Services/ProductService";
import {Category} from "../../Seller/Models/Category";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent {
  private router: Router;
  private productService: ProductService;
  public  categories: Category[]=[];
  public category: string;
  public isClicked: boolean=false;

  constructor(router: Router, productService: ProductService) {
    this.router=router
    this.productService=productService
    this.fetchCategories();
  }

  private fetchCategories() {
    this.productService.getCategories()
      .subscribe(c=>{
        this.categories=c;
      })
  }

  addCategoryClicked() {
    this.isClicked=true;
  }

  saveChanges() {
    console.log(this.category);
    this.productService.postCategory(this.category)
      .subscribe(c=>
      {
      })
    this.fetchCategories();
    this.isClicked=false;
  }
}
