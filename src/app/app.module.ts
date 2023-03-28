import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { CookieService } from 'ngx-cookie-service';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FaqsComponent } from './faqs/faqs.component';
import { ErrComponent } from './err/err.component';
import { AboutComponent } from './about/about.component';
import { AddproductComponent } from './productuser/addproduct/addproduct.component';
import { DisplayproductComponent } from './productuser/displayproduct/displayproduct.component';
import { UpdateproductComponent } from './productuser/updateproduct/updateproduct.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { DisplayuserComponent } from './admin/user/displayuser/displayuser.component';
import { ContactComponent } from './contact/contact.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    EditAddressComponent,
    FaqsComponent,
    ErrComponent,
    AboutComponent,
    AddproductComponent,
    DisplayproductComponent,
    UpdateproductComponent,
    AdduserComponent,
    DisplayuserComponent,
    ContactComponent,
    FavoritesComponent,
    AjoutProduitComponent,
    MyprofileComponent,
    ListofproductsComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,NgxPaginationModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
