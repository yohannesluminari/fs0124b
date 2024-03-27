import { Component, OnInit } from '@angular/core';
import { iProdotti } from '../../Models/prodotti';
import { ProdottoService } from '../../prodotto.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent implements OnInit {
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
