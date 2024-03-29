import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { iUsers } from '../../Models/users'; // Assicurati di importare correttamente l'interfaccia iUsers

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: iUsers[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.users = this.todoService.getUsers();
  }
}
