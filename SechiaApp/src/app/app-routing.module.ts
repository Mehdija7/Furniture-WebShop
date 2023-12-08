import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  RegisterCustomerComponent
} from "./Modules/Authentication/Components/register-customer/register-customer.component";
import {WelcomeComponent} from "./Modules/Shared/Components/welcome/welcome.component";
import {LoginComponent} from "./Modules/Authentication/Components/login/login.component";
import {HomeComponent} from "./Modules/Home/home/home.component";
import {SearchwindowComponent} from "./Modules/Search/Components/searchwindow/searchwindow.component";
import { AddNewProductComponent } from './Modules/Seller/Components/add-new-product/add-new-product.component';
import { ProductDetailsComponent } from './Modules/Product/Components/product-details/product-details.component';
import { AdminPageComponent } from './Modules/admin/admin-page/admin-page.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthSellerGuard } from './auth/seller/auth-seller.guard';
import {AdminSellersAddComponent} from "./Modules/admin/admin-sellers-add/admin-sellers-add.component";
import {AdminSellersAddFormComponent} from "./Modules/admin/admin-sellers-add-form/admin-sellers-add-form.component";
import {CartWindowComponent} from "./Modules/Cart/Components/cart-window/cart-window.component";

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'register', component: RegisterCustomerComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', canActivate:[AuthGuard], component: SearchwindowComponent },
  { path: 'product/add', canActivate: [AuthGuard, AuthSellerGuard], component: AddNewProductComponent },
  { path: 'product/:id', canActivate: [AuthGuard],component: ProductDetailsComponent },
  { path: 'admin', canActivate: [AuthGuard, AuthSellerGuard], component: AdminPageComponent },
  {path: 'seller/add', canActivate: [AuthGuard, AuthSellerGuard], component:AdminSellersAddFormComponent},
  {path: 'cart',canActivate: [AuthGuard], component: CartWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
