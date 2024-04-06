
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../models/i-user';


@Component({
  selector: 'app-area-privata',
  templateUrl: './area-privata.component.html',
  styleUrl: './area-privata.component.scss'
})
export class AreaPrivataComponent {

  constructor(private authsvc:AuthService){}

user!:IUser | undefined

  ngOnInit(){
    this.authsvc.user$.subscribe(user => {
      this.user = user || undefined;
    })
  }
}
