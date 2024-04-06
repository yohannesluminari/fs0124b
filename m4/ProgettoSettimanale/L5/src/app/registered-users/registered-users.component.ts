import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/i-user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrl: './registered-users.component.scss'
})
export class RegisteredUsersComponent implements OnInit {
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
