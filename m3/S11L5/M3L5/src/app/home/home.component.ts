import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/i-user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: IUser[] = [];

  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.authSvc.getAllUsers().subscribe(
      (users: IUser[]) => {
        this.users = users;
      }
    );
  }
}
