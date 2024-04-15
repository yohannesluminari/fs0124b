import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from './Models/product';
import { Subject, map, tap } from 'rxjs';

interface responseJSON  {
    products: iProduct[]
    total: number
    skip: number
    limit:  number
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  favourites:iProduct[] = [];

  favSubject = new Subject<iProduct>();
  cartSubject = new Subject<iProduct>();

  $favourites = this.favSubject.asObservable().pipe(tap(p => {
    this.favourites.push(p)
  }))
  $cart = this.cartSubject.asObservable()


  apiUrl:string = 'https://dummyjson.com/products'

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<responseJSON>(this.apiUrl)
    .pipe(map(r => r.products))
  }

  addToFavourites(product:iProduct){
    this.favSubject.next(product)
  }

  addToCart(product:iProduct){
    this.cartSubject.next(product)
  }

}
