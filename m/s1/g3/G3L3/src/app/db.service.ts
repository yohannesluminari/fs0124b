import { iArticolo } from './Models/articolo';
import { Injectable } from '@angular/core';
import { iJsonContent } from './Models/json-content';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  articoliArr:iArticolo[]=[];

  getAllArticolo():Promise<iArticolo[]>{

    return fetch('../assets/db.json')
    .then(res => res.json())
    .then( (contenutoJson:iJsonContent) => {

      return this.articoliArr = contenutoJson.posts

    })
  }

  getActiveArticolo():Promise<iArticolo[]>{
    return this.getAllArticolo()
    .then(res => res.filter(p => p.active))
  }
  getInActiveArticolo():Promise<iArticolo[]>{
    return this.getAllArticolo()
    .then(res => res.filter(p => !p.active))
  }

}
