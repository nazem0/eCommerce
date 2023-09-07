import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: "", component: MainLayoutComponent, children: [
      { path: "", redirectTo: "/products", pathMatch: "full" },
      { path: 'products', component: ProductsListComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ]
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
