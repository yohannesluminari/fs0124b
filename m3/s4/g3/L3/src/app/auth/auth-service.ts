
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // jwtHelper:JwtHelperService = new JwtHelperService()//ci permette di lavorare facilmente con i jwt

  authSubject = new BehaviorSubject<IUser|null>(null);//se nel behavioursubject c'è null significa che l'utente non è loggato, altrimenti conterrà l'oggetto user con tutte le sue info

  user$ = this.authSubject.asObservable()//contiene i dati dell'utente loggato oppure null
  isLoggedIn$ = this.user$.pipe(map(user => !!user))//restituisce true se lò'utente è loggato, false se non lo è
  //!!user è come scrivere Boolean(user)
  //isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)))

  constructor(
    private http:HttpClient,
    private router:Router
    ) {

      this.restoreUser()

    }
  restoreUser() {
    throw new Error('Method not implemented.');
  }

  // //ng g environments
  // registerUrl:string = environment.registerUrl
  // loginUrl:string = environment.loginUrl

  // register(newUser:Partial<IUser>):Observable<AccessData>{
  //   return this.http.post<AccessData>(this.registerUrl,newUser)
  // }

  // login(loginData:ILoginData):Observable<AccessData>{
  //   return this.http.post<AccessData>(this.loginUrl,loginData)
  //   .pipe(tap(data => {

  //     this.authSubject.next(data.user)//comunico al subject che l'utente si è loggato
  //     localStorage.setItem('accessData', JSON.stringify(data))

  //     this.autoLogout(data.accessToken)

  //   }))
  // }


}
