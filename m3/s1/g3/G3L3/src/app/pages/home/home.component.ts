import { DbService } from './../../db.service';
import { iArticolo } from './../../Models/articolo';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  articoliArr:iArticolo[] = [];


  constructor(private articoliSvc:DbService){}

  ngOnInit(){

    this.articoliSvc.getAllArticolo().then(res => {

      this.articoliArr = res;

    })

  }
}
