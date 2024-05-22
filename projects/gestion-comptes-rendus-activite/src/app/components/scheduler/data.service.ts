import { Injectable } from '@angular/core';
import { DayPilot } from 'daypilot-pro-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  resources: DayPilot.ResourceData[] = [
    { name: 'Resource 1', id: 'R1', capacity: 10 },
    { name: 'Resource 2', id: 'R2', capacity: 30 },
    { name: 'Resource 3', id: 'R3', capacity: 20 },
  ];

  events: DayPilot.EventData[] = [
    {
      id: '1',
      resource: 'R1',
      start: '2024-03-03',
      end: '2024-03-08',
      text: 'Scheduler Event 1',
      barColor: '#e69138',
    },
    {
      id: '2',
      resource: 'R3',
      start: '2024-03-02',
      end: '2024-03-05',
      text: 'Scheduler Event 2',
      barColor: '#6aa84f',
    },
    {
      id: '3',
      resource: 'R3',
      start: '2024-03-06',
      end: '2024-03-09',
      text: 'Scheduler Event 3',
      barColor: '#3c78d8',
    },
  ];

  constructor(private http: HttpClient) {}

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

  getResources(): Observable<any[]> {
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.resources);
      }, 200);
    });

    // return this.http.get("/api/resources");
  }
}
