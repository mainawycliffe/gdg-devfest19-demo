import { Injectable } from '@angular/core';
import { Todos, Todo } from '../todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todos = [
    { isDone: false, todo: 'buy milk' },
    { isDone: false, todo: 'buy groceries' },
    { isDone: false, todo: 'buy bread' },
    { isDone: false, todo: 'go to school' }
  ];

  constructor() {}

  getTodos(): Todos {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  isDone(index: number) {
    this.todos[index].isDone = true;
  }
}
