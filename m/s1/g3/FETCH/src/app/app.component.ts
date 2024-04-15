import { Component } from '@angular/core';
import { iPizze } from './Models/pizze';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  pizzeArr:iPizze[] = [];

  ngOnInit(){

    fetch('../assets/pizze.json')
    .then(pizze => pizze.json())
    .then((pizze:iPizze[]) => this.pizzeArr = pizze)

  }

  soloDisponibili(){
    this.pizzeArr = this.pizzeArr.filter(p => p.disponibile)
  }

}
