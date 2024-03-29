import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchQuery: any;
  filteredTodos: any[] | undefined;
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

  ssearchTasks(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredTodos = this.todosWithUserNames;
    } else {
      const searchTerm = this.searchQuery.toLowerCase().trim();
      this.filteredTodos = this.todosWithUserNames.filter(todo => {
        return (
          todo.todo.toLowerCase().includes(searchTerm) ||
          todo.userName.toLowerCase().includes(searchTerm)
        );
      });
    }
  }

}
