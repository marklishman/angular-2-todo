import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from './todo.interface';

@Component({
  selector: 'todo-form',
  template: `
    <form (ngSubmit)="addTodo()">
      <input type="text" [(ngModel)]="task" required
             size="30" placeholder="add new todo here">
      <input class="btn-primary" type="submit" value="add">
    </form>`
})
export class TodoFormComponent {

  @Output() private newTask = new EventEmitter<Todo>();
  private task: string = '';

  private addTodo() {
    this.newTask.emit({
        text:this.task,
        done:false
    });
    this.task = '';
  }
}