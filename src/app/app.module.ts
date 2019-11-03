import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { ListTodosComponent } from './todos/list-todos/list-todos.component';

@NgModule({
  declarations: [AppComponent, ListTodosComponent, AddTodoComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  entryComponents: [ListTodosComponent, AddTodoComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      ['add-todo', AddTodoComponent],
      ['list-todos', ListTodosComponent]
    ];

    for (const [name, component] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
