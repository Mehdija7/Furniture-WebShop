import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../Search/Services/ProductService";
import {Category} from "../../Seller/Models/Category";
import {Room} from "../../Seller/Models/Room";

@Component({
  selector: 'app-admin-rooms',
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.css']
})
export class AdminRoomsComponent {
  private router: Router;
  private productService: ProductService;
  public  rooms: Room[]=[];
  public  room: string;
  public isClicked: boolean=false;

  constructor(router:Router, productservice: ProductService) {
    this.productService=productservice;
    this.router=router;
    this.fetchRooms()
  }

  private fetchRooms() {
    this.productService.getRooms()
      .subscribe(r=>{
        this.rooms=r
      })
  }


  saveChanges() {
    this.productService.postRoom(this.room)
      .subscribe(()=>
      {
        this.fetchRooms();
        this.isClicked=false;
      })
  }

  addRoomClicked() {
    this.isClicked=true;
  }
}
