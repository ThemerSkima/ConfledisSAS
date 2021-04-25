import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  url = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) {}

  getProductById(id: any) {
    return this.http.get<any>(this.url + id);
  }
  getProducts(): Observable<Object> {
    return this.http.get<any>(this.url).pipe(
      map((res) => {
        return res;
      })
    );
  }

  addProducts(name: any, price: any, quantity: any) {
    this.http
      .post(this.url, { name: name, price: price, quantity: quantity })
      .subscribe((res) => {
        console.log(res);
        return res;
      });
  }

  deleteP(id: any): Observable<Object> {
    return this.http.delete(this.url + id).pipe(
      map((res) => {
        return res;
      })
    );
  }
}