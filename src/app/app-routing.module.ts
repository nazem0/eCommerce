import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';
import { ProductComponent } from './Components/product/product.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { loggedInGuard } from './Guards/logged-in.guard';

const routes: Routes = [
  // { path: "", redirectTo: "/products", pathMatch: "full" },
  {
    path: "", component: MainLayoutComponent,canActivate:[loggedInGuard],
    children: [
      {path:"", component:HomeComponent},
      {path:"cart",component:CartComponent},
      { path: 'products/:SearchedTitle', component: ProductsListComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
