import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  url = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) {}

  getProductById(id: any) {
    return this.http.get<any>(this.url + id);
  }
  getProducts() {
    return this.http.get<any>(this.url);
  }

  addProducts(name: any, price: any, quantity: any) {
    this.http
      .post(this.url, { name: name, price: price, quantity: quantity })
      .subscribe((res) => {
        console.log(res);
        return res;
      });
  }

  deleteP(id: any) {
    this.http.delete(this.url + id).subscribe((res) => {
      return res;
    });
  }
}
