import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  name: string;
  quantity: number;
  price: number;
  searchText: string = '';
  products: any = [];
  headElements = ['id', 'Name', 'Price', 'Quantity'];
  showtable: boolean = false;

  constructor(private pService: ProductserviceService) {
    this.name = '';
    this.quantity = 0;
    this.price = 0;
  }

  ngOnInit() {
    this.pService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  listproducts() {
    if (this.showtable == true) this.showtable = false;
    else {
      this.showtable = true;
      this.ngOnInit();
    }
  }

  addproduct() {
    this.pService.addProducts(this.name, this.price, this.quantity);
    this.ngOnInit();
  }

  deleteProduct(id: any) {
    this.pService.deleteP(id).subscribe((res) => {
      this.products = res;
    });
    this.ngOnInit();
  }

  search() {
    if (this.searchText) {
      for (let A of this.products)
        if (A.name == this.searchText) {
          this.pService.getProductById(A.id).subscribe((res) => {
            this.products = [];
            this.products.push(res);
            console.log(this.products);
          });
          break;
        }
    }
  }
}