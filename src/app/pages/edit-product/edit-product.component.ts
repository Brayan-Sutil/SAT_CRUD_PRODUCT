import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productForm!: FormGroup;
  productId!: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });

    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.productId) {
      this.loadProductData(this.productId);
    }
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

  loadProductData = (productId: number) => {
    this.productService.getProductById(productId).subscribe({
      next: (data) => {
        console.log('Dados do produto carregados:', data);
        this.productForm.patchValue({
          name: data.name,
          weight: data.weight,
          price: data.price,
          description: data.description,
        });
      },
      error: (err) => console.error('Erro ao carregar produto:', err),
    });
  };

  onSubmit = () => {
    if (this.productForm.invalid) {
      return;
    }

    this.productService
      .updateProduct(this.productId, this.productForm.value)
      .subscribe({
        next: () => {
          console.log('Produto atualizado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Erro ao atualizar produto:', err),
      });
  };
}
