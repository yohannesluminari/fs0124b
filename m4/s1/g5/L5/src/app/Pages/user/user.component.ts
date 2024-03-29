import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { iUsers } from '../../Models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: iUsers[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }
}
