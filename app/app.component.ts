import { Component } from '@angular/core';

import { Todo } from './todo.interface';
import { TodoListComponent } from './todo-list.component';
import { TodoFormComponent } from './todo-form.component';

@Component({
    selector: 'todo-app',
    template: `
        <h2>Todo</h2>
        <span>{{remaining}} of {{todos.length}} remaining</span>
        [ <a (click)="archive()">archive</a> ]
    
        <todo-list [todos]="todos"></todo-list>
        <todo-form (newTask)="addTask($event)"></todo-form>`,
        styles:['a { cursor: pointer; cursor: hand; }'],
    directives: [
        TodoListComponent, 
        TodoFormComponent
    ]
})

export class AppComponent {
    
    private todos: Todo[] = [
        {text: 'learn angular',        done: true},
        {text: 'build an angular app', done: false}
    ];

    private get remaining() {
        return this.todos.filter(todo => !todo.done).length;
    }

    private archive(): void {
        let oldTodos = this.todos;
        this.todos = [];
        oldTodos.forEach(todo => {
            if (!todo.done) { this.todos.push(todo); }
        });
    }

    private addTask(task: Todo) {
        this.todos.push(task);
    }
}