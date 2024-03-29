

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasksWithUserNames: any[] | undefined;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.tasksWithUserNames = this.todoService.getAllTodosWithUserNames();
  }
}
