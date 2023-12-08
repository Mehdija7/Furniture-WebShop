import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Modules/Search/Services/ProductService';
import { Category } from '../../Models/Category';
import { ProductPost } from '../../Models/ProductPost';
import { Room } from '../../Models/Room';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent {

  productService: ProductService;
  router: Router;

  response: { dbPath: '' };

  newProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    shortDescription: new FormControl('', [Validators.required]),
    longDescription: new FormControl(''),
    categoryId: new FormControl(1),
    roomId: new FormControl(1),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    image: new FormControl('', [Validators.required]),
    dimension: new FormControl(null)
  })

  categories: Category[] = []
  rooms: Room[] = []

  constructor(productService: ProductService, router: Router) {
    this.productService = productService;
    this.router = router;
    this.fetchCategories();
    this.fetchRooms();
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

  onSubmit() {
    console.log(this.newProductForm.value)
    this.productService.postProduct(this.newProductForm.value as ProductPost).subscribe(()=>{
      this.router.navigate(['admin', {content: 'products'}])
    })
  }

  uploadFinished($event: any) {
    this.response = $event
    this.newProductForm.patchValue({'image': this.response.dbPath})
    console.log(this.newProductForm.value)
  }
}