import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  todos: Object[] = [];
  task: Object = {name: '', dueDate: '', completed: false};
  constructor() { }
  addTodo(){
    this.todos.push(this.task);
    console.log(this.todos);
    this.task = {name: '', dueDate: '', completed: false};
  }
  logTodo(val){
    console.log(val);
  }
  ngOnInit() {
  }

}
