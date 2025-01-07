import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  imports: [NavbarComponent, CdkTableModule, CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  columns: string[] = ['id', 'title', 'price', 'image'];
  total: Signal<number> = computed(() =>
    this.products().reduce((acc, product) => acc + product.price, 0)
  );

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }
}
