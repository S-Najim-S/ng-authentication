import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private _eventUrl = 'http://localhost:3000/api/events';
  private _specialEventUrl = 'http://localhost:3000/api/special';
  constructor(private _http: HttpClient) {}

  getEvents() {
    return this._http.get<any>(this._eventUrl);
  }
  getSpecialEvents() {
    return this._http.get<any>(this._specialEventUrl);
  }
}
