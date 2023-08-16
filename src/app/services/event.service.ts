import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'https://api.example.com/events'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  getEvent(id: number): Observable<EventModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<EventModel>(url);
  }

  addEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.apiUrl, event);
  }

  getAllEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.apiUrl);
  }

  updateEventDetails(id: number, details: string): Observable<EventModel> {
    const url = `${this.apiUrl}/${id}`;
    const updatedEvent = { details: details };
    return this.http.put<EventModel>(url, updatedEvent);
  }

  deleteEvent(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
