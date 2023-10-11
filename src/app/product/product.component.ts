import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  products: any;
constructor(private productService: ProductServiceService) {}

  ngOnInit(){
this.getAllProduct()
  }
  getAllProduct(){
    this.productService.getProductData().subscribe((data) => {
      this.products = data;
    });
  }
}
