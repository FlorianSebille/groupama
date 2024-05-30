import { createAction, props } from '@ngrx/store';
import { DayPilot } from 'daypilot-pro-angular';
import { UserModel } from './user.model';

export const loadRessources = createAction('[User] Load Ressources');

export const loadUsers = createAction('[User] Load');

export const loadUsersSuccess = createAction(
  '[User] Load Success',
  props<{ users: UserModel }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Failure',
  props<{ error: string }>()
);

export const loadRessourcesSuccess = createAction(
  '[User] Load Ressources Success',
  props<{ ressources: DayPilot.ResourceData[] }>()
);
export const loadRessourcesFailure = createAction(
  '[User] Load Ressources Failure',
  props<{ error: string }>()
);
export const addRessource = createAction(
  '[User] Add Ressource',
  props<{ ressource: DayPilot.ResourceData }>()
);
export const updateRessource = createAction(
  '[User] Update Ressource',
  props<{ ressource: DayPilot.ResourceData }>()
);
export const deleteRessource = createAction(
  '[User] Delete Ressource',
  props<{ id: string }>()
);

export const loadEvents = createAction('[User] Load Events');
export const loadEventsSuccess = createAction(
  '[User] Load Ressources Success',
  props<{ events: DayPilot.EventData[] }>()
);
export const loadEventsFailure = createAction(
  '[User] Load Ressources Failure',
  props<{ error: string }>()
);
export const addEvent = createAction(
  '[User] Add Event',
  props<{ event: DayPilot.EventData }>()
);
export const updateEvent = createAction(
  '[User] Update Event',
  props<{ event: DayPilot.EventData }>()
);
export const deleteEvent = createAction(
  '[User] Delete Event',
  props<{ id: string }>()
);
