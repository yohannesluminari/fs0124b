import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from './Models/product';
import { Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  favourites: iProduct[] = [];

  favSubject = new Subject<iProduct>();

  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<iProduct[]>(this.apiUrl)
      .pipe(map(products => products.slice(0, 10)));
  }


  addToFavorites(product: iProduct) {
    this.favSubject.next(product);
  }

  
}
