import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  weight: number;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) {}

  // Requisição GET - Obter todos os produtos
  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/product`);
  }

  // Requisição POST - Criar um produto
  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.apiUrl}/product`, product);
  }

  // Requisição PUT - Atualizar um produto
  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(`${this.apiUrl}/product/${id}`, product);
  }

  // Requisição GEt - Pega produto por id
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/product/${id}`);
  }

  // Requisição DELETE - Deletar um produto
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/product/${id}`);
  }
}
