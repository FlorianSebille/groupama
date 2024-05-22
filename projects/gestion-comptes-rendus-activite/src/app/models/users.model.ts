import { DayPilot } from 'daypilot-pro-angular';
import { Observable } from 'rxjs';

export interface User {
  ressources: DayPilot.ResourceData[];
  events: DayPilot.EventData[];

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]>;

  getResourcers(): Observable<any[]>;
}

export interface UsersListState {
  data: User | null;
  loading: boolean;
  loaded: boolean;
}
