import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.css'],
})
export class TododetailsComponent implements OnInit {
  todolist: any = [];
  constructor(private todo: TodoService) {}

  ngOnInit(): void {
    this.todo.getlist().subscribe((data) => (this.todolist = data));
  }
}
