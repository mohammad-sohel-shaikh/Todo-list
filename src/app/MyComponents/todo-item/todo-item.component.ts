import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../ToDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo = {};
  @Input() i?:number;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter;
  @Output() todoCheckbox: EventEmitter<Todo>=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo); // adeeed by me
    // console.log("onclick is running");
  }
  onCheckbox(todo:Todo){
    this.todoCheckbox.emit(todo); // adeeed by me

  }

}
