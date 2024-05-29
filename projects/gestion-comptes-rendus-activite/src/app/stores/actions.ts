import { createAction, props } from '@ngrx/store';
import { DayPilot } from 'daypilot-pro-angular';

export const loadRessources = createAction('[User] Load Ressources');

export const load = createAction('[User] Load');

export const loadSuccess = createAction(
  '[User] Load Success',
  props<{ ressources: DayPilot.ResourceData[]; events: DayPilot.EventData[] }>()
);

export const loadFailure = createAction(
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
