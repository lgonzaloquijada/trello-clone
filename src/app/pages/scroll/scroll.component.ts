import { Component, inject, OnInit, signal } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent implements OnInit {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }
}
