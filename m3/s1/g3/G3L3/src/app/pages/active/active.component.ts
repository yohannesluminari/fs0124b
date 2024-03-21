import { Component } from '@angular/core';
import { DbService } from '../../db.service';
import { iArticolo } from '../../Models/articolo';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {

  articoliArr:iArticolo[] = [];

  constructor(private articoliSvc:DbService){}

  ngOnInit(){

    this.articoliSvc.getActiveArticolo().then(res => {

      this.articoliArr = res;

    })

  }
}
