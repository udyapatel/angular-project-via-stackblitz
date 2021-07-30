import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo;
@Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  constructor() { }
  

  ngOnInit() {
  }


  onClick(todo:Todo){
    console.log("onclick hasbeen triggered");
    this.todoDelete.emit(todo);
  }
}