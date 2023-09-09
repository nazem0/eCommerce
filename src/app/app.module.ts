import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NullImagePipe } from './Pipes/null-image.pipe';
import { ProductNameAdjusterPipe } from './Pipes/product-name-adjuster.pipe';
import { FiltersComponent } from './Components/products-list/filters/filters.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
// Dont Forget To Include Pagination In The Website
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    ProductComponent,
    ProductsListComponent,
    NullImagePipe,
    ProductNameAdjusterPipe,
    FiltersComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MainLayoutComponent,
    HomeComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
