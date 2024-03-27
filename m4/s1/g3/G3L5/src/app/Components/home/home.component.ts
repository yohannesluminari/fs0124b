import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../../prodotto.service';
import { iProdotti } from '../../Models/prodotti';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  prodotti: iProdotti[] = [];

  constructor(private prodottoSvc: ProdottoService) {}

  ngOnInit() {
    this.prodottoSvc.getAll().subscribe(prodotti => {
      this.prodotti = this.prodotti
      console.log('sono dentro qui')
      console.log(prodotti)
    })

  }

  // cancellaProdotto(id: number) {
  //   this.prodottoSvc.delete(id).subscribe(() => {
  //     this.prodotti = this.prodotti.filter(p => p.id !== id);
  //   });
  // }
}
