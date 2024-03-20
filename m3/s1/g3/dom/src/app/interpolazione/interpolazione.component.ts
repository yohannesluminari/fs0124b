import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolazione',
  templateUrl: './interpolazione.component.html',
  styleUrl: './interpolazione.component.scss'
})
export class InterpolazioneComponent {

  titolo:string = 'Titolo del componente';

  pizza:{gusto:string, prezzo:number} = {
    gusto: 'Margherita',
    prezzo:  5
  }
}
