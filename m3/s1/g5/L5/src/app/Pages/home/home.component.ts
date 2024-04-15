import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchQuery: string | undefined;
  filteredTodos: any[] = [];
  todosWithUserNames: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todosWithUserNames = this.todoService.getAllTodosWithUserNames();
    this.filteredTodos = this.todosWithUserNames;
  }

  toggleTodoCompletion(todo: any): void {
    todo.completed = !todo.completed;
    todo.backgroundColor = todo.completed ? 'green' : 'red';
  }

  searchTasks(): void {
    if (!this.searchQuery || this.searchQuery.trim() === '') {

      this.filteredTodos = this.todosWithUserNames;
    } else {
      const searchTerm = this.searchQuery.toLowerCase().trim();
      this.filteredTodos = this.todosWithUserNames.filter(todo => {
        const userName = todo.userName.toLowerCase();
        return userName.includes(searchTerm);
      });
    }
  }
}
