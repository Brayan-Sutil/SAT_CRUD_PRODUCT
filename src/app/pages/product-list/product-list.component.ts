import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = []

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter(product => product.id !== id);
        console.log('Produto deletado com sucesso!');
      },
      error: (err) => console.error('Erro ao deletar produto:', err)
    });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Erro ao carregar produtos:', err)
    });
  }

  handleEditProduct(productId: number): void {
    console.log(`Editar produto com ID: ${productId}`);
    this.router.navigate(['/edit-product', productId]);
  }
}
