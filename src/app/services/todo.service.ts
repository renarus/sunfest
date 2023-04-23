import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = "http://localhost:3001/texts"
  constructor(private httpClient: HttpClient) { }
  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl)
  }
}
