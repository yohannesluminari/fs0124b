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
    });
  }

  addToFavourites(product: iProduct) {
    this.productSvc.addToFavorites(product);
    this.likedCards.push(product);
  }

}
