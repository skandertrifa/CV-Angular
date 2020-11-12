import { Injectable } from '@angular/core';
import { Todo } from './../../shared/todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [
    new Todo(1, 'todo 1', 'content 1')
  ];
  constructor() { }
  logger(): void{
    console.log(this.todos);
  }
  addTodo(x: Todo): void{
    this.todos.push(x);
  }
  getTodos(): Todo[]{
    return this.todos;
  }
  deleteTodo(id: number): Todo[]{
    this.todos = this.todos.filter( todo => todo.id !== id);
    return this.todos;
  }
}
