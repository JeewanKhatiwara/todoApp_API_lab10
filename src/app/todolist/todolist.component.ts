import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todolist: any = [];
  constructor(private todo: TodoService) {}

  ngOnInit(): void {
    this.todo.getlist().subscribe((data) => (this.todolist = data));
  }
}