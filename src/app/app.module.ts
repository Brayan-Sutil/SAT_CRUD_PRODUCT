import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { AppBodyComponent } from './component/app-body/app-body.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent, 
    AppHeaderComponent,
    AppBodyComponent,
    CreateProductComponent,
    ProductListComponent,
    ProductListComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
