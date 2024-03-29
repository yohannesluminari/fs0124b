import { Component } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
toggleCompleted(_t3: any) {
throw new Error('Method not implemented.');
}

  todosWithUserNames: any[] | undefined;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todosWithUserNames = this.todoService.getAllTodosWithUserNames();
  }

  getColor(todo: any): string {
    return todo.completed ? 'green' : 'red';
  }
}
