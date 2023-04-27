import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from '../models/slider';
@Injectable({
  providedIn: 'root'
})
export class SliderService {
  apiUrl = "http://localhost:3001/slider"
  constructor(private httpClient: HttpClient) { }
  getTodos(): Observable<Slider[]> {
    return this.httpClient.get<Slider[]>(this.apiUrl)
  }
}