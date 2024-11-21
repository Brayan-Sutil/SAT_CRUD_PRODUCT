import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: ProductListComponent }, 
  { path: 'create-product', component: CreateProductComponent }, 
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}