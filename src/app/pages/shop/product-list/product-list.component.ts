import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css','./card.css']
})
export class ProductListComponent implements OnInit {
  products: any[];

  constructor(private shopService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.shopService.getAllProducts().subscribe(data => {
      this.products = data.products;
    });
  }

  searchProducts(query: string) {
    this.shopService.searchProducts(query).subscribe(data => {
      this.products = data.products;
    });
  }

  addProduct(product: any) {
    this.shopService.addProduct(product).subscribe(data => {
      // Handle response
    });
  }

  updateProduct(productId: number, product: any) {
    this.shopService.updateProduct(productId, product).subscribe(data => {
      // Handle response
    });
  }

  deleteProduct(productId: number) {
    this.shopService.deleteProduct(productId).subscribe(data => {
      // Handle response
    });
  }
}
