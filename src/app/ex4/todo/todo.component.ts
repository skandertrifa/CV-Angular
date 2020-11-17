import { Component, OnInit } from '@angular/core';
import { TodoService } from './../services/todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Todo } from './../../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  form: FormGroup;

  constructor(
    private todoService: TodoService,
    ) {
      this.todoService.logger();
  }

  ngOnInit(): void {
    this.initForm();
    this.todos = this.todoService.getTodos();
  }
  initForm(): void {
    /** field1, textArea1, textArea2 are form control instances */
    this.form = new FormGroup({
        name: new FormControl(''),
        content: new FormControl(''),
    });
 }
  deleteTodo(id: number): void{
    this.todos = this.todoService.deleteTodo(id);
  }
  onSubmit(): void {
    // code here after submit
    console.info(this.form.value);
    console.log(this.form.value.name);
    const todo = new Todo(this.getNextID(), this.form.value.name, this.form.value.content);
    console.log(todo);
    this.todoService.addTodo(todo);
    this.form.reset();
  }
  getNextID(): number {
    return this.todos.length + 1;
  }

}
