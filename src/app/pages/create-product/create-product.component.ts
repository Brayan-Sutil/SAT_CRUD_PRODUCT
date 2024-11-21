import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})

export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor (
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.productForm.get('name')!;
  }

  get price() {
    return this.productForm.get('price')!;
  }
  
  get weight() {
    return this.productForm.get('weight')!;
  }

  get description() {
    return this.productForm.get('description')!;
  }

  onSubmit = () => {
    if (this.productForm.invalid) {
      return;
    }

    this.productService.createProduct(this.productForm.value).subscribe({
      next: () => {
        console.log('Produto criado com sucesso!');
        this.router.navigate(['/']);
      },
      error: (err) => console.error('Erro ao criar produto:', err),
    });
  }
}
