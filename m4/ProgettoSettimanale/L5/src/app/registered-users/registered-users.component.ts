import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/i-user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {
  users: IUser[] = [];
  cardColors: string[] = [];

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.generateCardColors();
  }

  loadUsers() {
    this.authSvc.getAllUsers().subscribe(
      (users: IUser[]) => {
        this.users = users;
      }
    );
  }

  generateCardColors() {
    for (let i = 0; i < this.users.length; i++) {
      this.cardColors.push(this.getRandomColor());
    }
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
