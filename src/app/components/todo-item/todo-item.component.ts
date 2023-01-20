import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input() todo!: Todo;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  OnClick(todo:Todo)
  {
    this.todoDelete.emit(todo);
    console.log('onclick has triggered')
  }
  ngOnInit(): void {
      
  }
}
