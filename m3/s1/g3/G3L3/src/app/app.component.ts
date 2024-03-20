import { Component } from '@angular/core';
import { iArticolo } from './Models/articolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  postArr:iArticolo[] = [];

  ngOnInit(){

    fetch('../assets/db.json')
    .then(articoli => articoli.json())
    .then((articolo) => this.postArr = articolo)
  }
}
