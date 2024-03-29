import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
taskCompleted(_t4: any) {
throw new Error('Method not implemented.');
}
  todosWithUserNames: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todosWithUserNames = this.todoService.getAllTodosWithUserNames();
  }

  toggleTodoCompletion(todo: any): void {
    todo.completed = !todo.completed;
    todo.backgroundColor = todo.completed ? 'green' : 'red';
  }
}
