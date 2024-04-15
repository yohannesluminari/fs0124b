import { Component } from '@angular/core';
import { DbService } from '../../db.service';
import { iArticolo } from '../../Models/articolo';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {
truncateText(arg0: string,arg1: number) {
throw new Error('Method not implemented.');
}

  articoliArr:iArticolo[] = [];

  constructor(private articoliSvc:DbService){}

  ngOnInit(){

    this.articoliSvc.getActiveArticolo().then(res => {

      this.articoliArr = res;

    })

  }
}
