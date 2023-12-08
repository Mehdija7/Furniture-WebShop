import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../Authentication/Services/UserService";
import {SellerAdd} from "../../Authentication/Models/SellerAdd";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-sellers',
  templateUrl: './admin-sellers.component.html',
  styleUrls: ['./admin-sellers.component.css']
})
export class AdminSellersComponent {
  private router: Router;
  private userService: UserService;

  sellers : SellerAdd[] = [];
  nameFilter: any;
  filteredSellers : SellerAdd[] = [];
  isNewSellerClicked : boolean = false;
  newSeller : SellerAdd;

  constructor(router:Router,userService: UserService) {
    this.router=router;
    this.userService=userService;
    this.fetchSellers();
  }

   private fetchSellers()  {
    this.userService.getSellers().subscribe(
      sellers=>
      {
        this.sellers=sellers;
        this.filteredSellers=sellers
      }
    )
  }

  nameFilterChanged() {
    var newSellers=this.sellers
    if (this.nameFilter != null && true && this.nameFilter != "")
    {
      newSellers=newSellers.filter(seller=>
        seller.name.toLowerCase().startsWith(this.nameFilter.toLowerCase()) || seller.surname.toLowerCase().startsWith(this.nameFilter.toLowerCase())
      )
    }
    this.filteredSellers=newSellers
  }

  addSellerClicked() {
    this.router.navigate(["seller/add"]);
  }
  Delete(x: string) {
    this.userService.deleteSeller(x)
      .subscribe(x=>{
          this.fetchSellers();
      });
  }

}
