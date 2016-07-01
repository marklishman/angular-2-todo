import { Component, Input } from '@angular/core';

import { Todo } from './todo.interface';

@Component({
  selector: 'todo-list',
  template: `
    <ul class="list-unstyled">
      <li *ngFor="let todo of todos">
        <input type="checkbox" [(ngModel)]="todo.done">
        <span class="done-{{todo.done}}">{{todo.text}}</span>
      </li>
    </ul>`,
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ]
})
export class TodoListComponent {
  @Input() private todos: Todo[];
}