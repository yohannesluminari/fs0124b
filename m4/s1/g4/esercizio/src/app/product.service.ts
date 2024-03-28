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
  favouritesKey: string = 'favourite_products'; // Definisci la proprietà favouritesKey come una stringa

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<iProduct[]>(this.apiUrl)
      .pipe(map(products => products.slice(0, 10)));
  }

  getFavourites(): iProduct[] {
    const favouritesString = localStorage.getItem(this.favouritesKey);
    return favouritesString ? JSON.parse(favouritesString) : [];
  }

  addToFavorites(product: iProduct) {
    const favourites = this.getFavourites();
    favourites.push(product);
    localStorage.setItem(this.favouritesKey, JSON.stringify(favourites));
  }

  removeFromFavorites(product: iProduct) {
    let favourites = this.getFavourites();
    favourites = favourites.filter(p => p.id !== product.id);
    localStorage.setItem(this.favouritesKey, JSON.stringify(favourites));
  }
}
