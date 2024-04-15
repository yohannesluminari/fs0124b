import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-task-left',
  templateUrl: './task-left.component.html',
  styleUrls: ['./task-left.component.scss']
})
export class TaskLeftComponent implements OnInit {
  uncompletedTodos: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.uncompletedTodos = this.todoService.getUncompletedTodos();
  }
}
