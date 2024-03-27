import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProdotti } from './Models/prodotti';


@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  apiUrl: string = 'https://dummyjson.com/docs/products';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<iProdotti[]>(this.apiUrl)
  }
}
