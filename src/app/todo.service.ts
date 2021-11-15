import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceX } from './space-x/space-x';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todolist: any = ['Go to Gym', 'Go to Bed', 'Go to Eat'];

  constructor(private http: HttpClient) {}
  public getlist(): Observable<SpaceX[]> {
    return this.http.get<SpaceX[]>('https://api.spacexdata.com/v3/missions');
  }
  public setlist(todo: any) {
    this.todolist.push(todo);
  }
}
