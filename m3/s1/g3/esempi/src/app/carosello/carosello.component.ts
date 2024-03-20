import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrl: './carosello.component.scss'
})
export class CaroselloComponent implements OnInit {

  immagini: string[] = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00artCZnWEnp99XTdKze0gPiS6vjU6kaqgA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_colc71Dm7FP57rIRDCeDXbxu1KTF23P7w&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzINq9XPqZsqcUbA3j5AdcituuczyOheXT5w&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKG7rtGtoPtGvnf_ClCXWzFWk_1JIUW4Ij2w&usqp=CAU'
  ]

  immagineCorrente: string = this.immagini[0]
  indice:number = 0;

  ngOnInit() {
    setInterval(() => {
      this.indice++;
      this.immagineCorrente = this.immagini[this.indice];
      if (this.indice > this.immagini.length) {
        this.indice = 0; // Ripristina l'indice all'inizio dell'array solo se supera la lunghezza
      }
    }, 300);
  }
}
