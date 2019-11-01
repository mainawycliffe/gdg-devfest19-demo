import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output()
  onerror: EventEmitter<string> = new EventEmitter();

  todoControl = new FormControl(null, Validators.required);

  constructor(private todosService: TodosService) {}

  ngOnInit() {}

  onAdd() {
    if (!this.todoControl.valid) {
      this.onerror.emit('Todo is required!');
      return;
    }

    this.onerror.emit('');

    this.todosService.addTodo({ todo: this.todoControl.value, isDone: false });
  }
}
