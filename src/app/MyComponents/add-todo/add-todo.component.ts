import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Todo } from '../../ToDo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title?:string;
  desc?:string;
  @Output() todoAdd: EventEmitter<Todo>=new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

    const todo={
      sno:2,
      title:this.title,
      desc:this. desc,
      active:true
    }
    this.todoAdd.emit(todo);

  }

}
