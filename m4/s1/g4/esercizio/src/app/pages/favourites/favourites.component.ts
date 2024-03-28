import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../Models/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  likedCards: iProduct[] = [];

  constructor(private productSvc: ProductService) {}

  ngOnInit() {
    // Recupera i prodotti preferiti dal servizio ProductService
    this.likedCards = this.productSvc.favourites;
  }

  removeFromFavourites(product: iProduct) {
    // Rimuove il prodotto dai preferiti
    const index = this.likedCards.indexOf(product);
    if (index !== -1) {
      this.likedCards.splice(index, 1);
      // Aggiorna i preferiti anche nel servizio ProductService
      this.productSvc.favourites = this.likedCards;
    }
  }
}
