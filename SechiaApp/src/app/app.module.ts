import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { RegisterCustomerComponent } from './Modules/Authentication/Components/register-customer/register-customer.component';
import { WelcomeComponent } from './Modules/Shared/Components/welcome/welcome.component';
import { RegisterFormComponent } from './Modules/Authentication/Components/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Modules/Authentication/Components/login/login.component';
import { LoginFormComponent } from './Modules/Authentication/Components/login-form/login-form.component';
import { HomeComponent } from './Modules/Home/home/home.component';
import { SearchwindowComponent } from './Modules/Search/Components/searchwindow/searchwindow.component';
import { AddNewProductComponent } from './Modules/Seller/Components/add-new-product/add-new-product.component';
import { NewProductFormComponent } from './Modules/Seller/Components/new-product-form/new-product-form.component';
import { FileUploadComponent } from './Modules/Shared/Components/file-upload/file-upload.component';
import { ProductGridComponentComponent } from './Modules/Shared/Components/product-grid-component/product-grid-component.component';
import { ProductDetailsComponent } from './Modules/Product/Components/product-details/product-details.component';
import { AdminPageComponent } from './Modules/admin/admin-page/admin-page.component';
import { AdminHomeComponent } from './Modules/admin/admin-home/admin-home.component';
import { AdminProductsComponent } from './Modules/admin/admin-products/admin-products.component';
import { AdminSellersComponent } from './Modules/admin/admin-sellers/admin-sellers.component';
import { AdminSellersAddComponent } from './Modules/admin/admin-sellers-add/admin-sellers-add.component';
import { AdminSellersAddFormComponent } from './Modules/admin/admin-sellers-add-form/admin-sellers-add-form.component';
import { AdminCategoriesComponent } from './Modules/admin/admin-categories/admin-categories.component';
import { AdminRoomsComponent } from './Modules/admin/admin-rooms/admin-rooms.component';
import { CartWindowComponent } from './Modules/Cart/Components/cart-window/cart-window.component';
import { CartFormComponent } from './Modules/Cart/Components/cart-form/cart-form.component';
import { AdminOrdersComponent } from './Modules/admin/admin-orders/admin-orders.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterCustomerComponent,
    WelcomeComponent,
    RegisterFormComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent,
    SearchwindowComponent,
    AddNewProductComponent,
    NewProductFormComponent,
    FileUploadComponent,
    ProductGridComponentComponent,
    ProductDetailsComponent,
    AdminPageComponent,
    AdminHomeComponent,
    AdminProductsComponent,
    AdminSellersComponent,
    AdminSellersAddComponent,
    AdminSellersAddFormComponent,
    AdminCategoriesComponent,
    AdminRoomsComponent,
    CartWindowComponent,
    CartFormComponent,
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
