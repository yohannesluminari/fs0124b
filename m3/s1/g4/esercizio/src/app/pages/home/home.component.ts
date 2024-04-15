import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { iProduct } from '../../Models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products: iProduct[] = [];
  likedCards: iProduct[] = [];

  constructor(private productSvc: ProductService) {}

  ngOnInit() {
    this.productSvc.getAll().subscribe(products => {
      this.products = products;
      this.likedCards = this.productSvc.getFavourites();
    });
  }

  addToFavourites(product: iProduct) {
    const isAlreadyLiked = this.likedCards.some(p => p.id === product.id);
    if (!isAlreadyLiked) {
      this.productSvc.addToFavorites(product);
      this.likedCards.push(product);
    }
  }

  removeFromFavourites(product: iProduct) {
    this.productSvc.removeFromFavorites(product);
    this.likedCards = this.likedCards.filter(p => p.id !== product.id);
  }
}
