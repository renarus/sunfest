import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl = "http://localhost:3001/card"
  constructor(private httpClient: HttpClient) { }
  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.apiUrl)
  }
}
