import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ErrComponent } from './err/err.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { AddproductComponent } from './productuser/addproduct/addproduct.component';
import { DisplayproductComponent } from './productuser/displayproduct/displayproduct.component';
import { UpdateproductComponent } from './productuser/updateproduct/updateproduct.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  
  {
    path:"product-single/:id",component:ProductsingleComponent
  },
  {
  path:"cart",component:CartComponent  
  },
  {
    path:"checkout",component:CheckoutComponent
  },
  {
    path:"edit-address",component:EditAddressComponent
  },
  {
    path:"forgot-password",component:ForgotPasswordComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"orders",component:OrdersComponent
  },
  {
    path:"profile-details",component:ProfileDetailsComponent
  },
  {
    path:"shop",component:ShopComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"faq",component:FaqsComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"favorites",component:FavoritesComponent
  },
  {
    path:"myprofile",component:MyprofileComponent
  },
  {
    path:"listofproducts",component:ListofproductsComponent
  },
  {
    path:"ajout-produit",component:AjoutProduitComponent
  },
  {
    path:"update-product",component:UpdateProductComponent
  },
  //  user add product 
  {
    path:"addproduct",component:AddproductComponent
  },
  {
    path:"updateproduct",component:UpdateproductComponent
  },
  {
    path:"displayproduct",component:DisplayproductComponent
  },
  //////////////////////////////////////////////////
  // admin product and user
  {
    path:"admin/useradd",component:DisplayproductComponent
  },
  {
    path:"admin/userdelete",component:DisplayproductComponent
  },
  {
    path:"admin/addproduct",component:DisplayproductComponent
  },
  {
    path:"admin/updateproduct",component:DisplayproductComponent
  },
  {
    path:"admin/deleteproduct",component:DisplayproductComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"**",component:ErrComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
