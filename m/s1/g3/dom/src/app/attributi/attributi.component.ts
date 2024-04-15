import { Component } from '@angular/core';

@Component({
  selector: 'app-attributi',
  templateUrl: './attributi.component.html',
  styleUrl: './attributi.component.scss'
})
export class AttributiComponent {
  testo:string = '<b>Ciao</b>';
  urlImmagine:string = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/07/collage-maker-27-jul-2023-01-46-pm-3317.jpg'
  coloreParagrafo:string = 'green'
}
