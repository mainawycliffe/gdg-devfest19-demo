import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo, Todos } from 'src/app/todos';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {
  todos$: Observable<Todos> = null;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todos$ = this.todosService
      .getTodos()
      .pipe(tap(todos => console.log(todos)));
  }

  toggleTodoStatus(todo: Todo) {
    this.todosService.toggleTodoStatus(todo);
  }
}
