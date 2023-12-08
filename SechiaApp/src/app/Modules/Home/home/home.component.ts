import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  numberOfCustomers : number = 0;
  numberOfProducts : number = 0;
  numberOfCreatedProducts : number = 0;
  numberOfProductsMax : number = 20;
  numberOfCustomersMax : number = 15;
  numberOfCreatedProductsMax : number = 350;
  duration : number = 1500; //3 sec
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }
  numberOfCustomersCounter:any = setInterval(() => {
      this.numberOfCustomers++;
      if (this.numberOfCustomers == this.numberOfCustomersMax) {
        clearInterval(this.numberOfCustomersCounter);
      }
    },
    (this.duration / this.numberOfCustomersMax)
  )

  numberOfCreatedProductsCounter:any = setInterval(() => {
      this.numberOfCreatedProducts++;
      if (this.numberOfCreatedProducts == this.numberOfCreatedProductsMax) {
        clearInterval(this.numberOfCreatedProductsCounter);
      }
    },
    (this.duration / this.numberOfCreatedProductsMax)
  )

  numberOfProductsCounter:any = setInterval(() => {
      this.numberOfProducts++;
      if (this.numberOfProducts == this.numberOfProductsMax) {
        clearInterval(this.numberOfProductsCounter);
      }
    },
    (this.duration/this.numberOfProductsMax)
  )

  LoadSearchScreen() : void
  {
    this.router.navigate(["/search"]);
  }
}
