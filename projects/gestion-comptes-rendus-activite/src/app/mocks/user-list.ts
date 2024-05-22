import { DayPilot } from 'daypilot-pro-angular';
import { Observable } from 'rxjs';

export const usersMock = {
  ressources: [
    {
      id: 'R1',
      name: 'toto',
      capacity: 30,
    },
    {
      id: 'R2',
      name: 'tutu',
      capacity: 30,
    },
    {
      id: 'R3',
      name: 'tutu',
      capacity: 30,
    },
  ],
  events: [
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
      resource: 'R1',
      start: '2024-03-18',
      end: '2024-03-22',
      text: 'Scheduler Event 2',
      barColor: '#e69138',
    },
    {
      id: '3',
      resource: 'R1',
      start: '2024-03-23',
      end: '2024-03-28',
      text: 'Scheduler Event 3',
      barColor: '#e69138',
    },
    {
      id: '4',
      resource: 'R2',
      start: '2024-03-03',
      end: '2024-03-08',
      text: 'Scheduler Event 1',
      barColor: '#e69138',
    },
    {
      id: '5',
      resource: 'R2',
      start: '2024-03-18',
      end: '2024-03-22',
      text: 'Scheduler Event 2',
      barColor: '#e69138',
    },
  ],

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  },

  getResourcers(): Observable<any[]> {
    // simulating an HTTP request
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.ressources);
      }, 200);
    });

    // return this.http.get("/api/resources");
  },
};
