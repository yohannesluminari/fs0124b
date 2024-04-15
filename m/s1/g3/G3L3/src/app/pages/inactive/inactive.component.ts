import { Component } from '@angular/core';
import { iArticolo } from '../../Models/articolo';
import { DbService } from '../../db.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.scss'
})
export class InactiveComponent {


  articoliArr:iArticolo[] = [];

  constructor(private articoliSvc:DbService){}

  ngOnInit(){

    this.articoliSvc.getInActiveArticolo().then(res => {

      this.articoliArr = res;

    })

  }
}
