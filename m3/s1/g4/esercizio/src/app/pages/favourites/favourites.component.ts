import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../Models/product';
import { ProductService } from '../../product.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  likedCards: iProduct[] = [];

  constructor(private productSvc: ProductService) {}

  ngOnInit() {
    this.likedCards = this.productSvc.getFavourites();
  }

  removeFromFavourites(product: iProduct) {
    this.productSvc.removeFromFavorites(product);
    this.likedCards = this.likedCards.filter(p => p.id !== product.id);
  }
}

