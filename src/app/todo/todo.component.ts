import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos:Todo[] =[];
  constructor() {
this.todos = [
  {
    sno: 1,
    title: "This is Title1",
    desc:"This is Description1",
    active: true

  },
  {
    sno: 2,
    title: "This is Title2",
    desc:"This is Description2",
    active: true

  },
  {
    sno: 3,
    title: "This is Title3",
    desc:"This is Description3",
    active: true

  },
  {
    sno: 4,
    title: "This is Title4",
    desc:"This is Description4",
    active: true

  }
]


   }

  ngOnInit() {
  }
  deleteTodo(todo:Todo){
console.log(todo);
const index= this.todos.indexOf(todo);
this.todos.splice(index,1);

  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    
      }
}