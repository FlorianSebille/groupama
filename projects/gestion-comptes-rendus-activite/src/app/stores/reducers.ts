import { createReducer, on } from '@ngrx/store';
import { DayPilot } from 'daypilot-pro-angular';
import {
  addEvent,
  addRessource,
  deleteEvent,
  deleteRessource,
  load,
  loadEvents,
  loadEventsFailure,
  loadEventsSuccess,
  loadFailure,
  loadRessources,
  loadRessourcesFailure,
  loadRessourcesSuccess,
  loadSuccess,
  updateEvent,
  updateRessource,
} from './actions';

export interface UserState {
  ressources: DayPilot.ResourceData[];
  events: DayPilot.EventData[];
  loading: boolean;
  error: string;
}
export const initialState: UserState = {
  ressources: [],
  events: [],
  loading: false,
  error: '',
};
export const userReducer = createReducer(
  initialState,

  on(addRessource, (state, { ressource }) => ({
    ...state,
    ressources: [...state.ressources, ressource],
  })),

  on(updateRessource, (state, { ressource }) => ({
    ...state,
    ressources: state.ressources.map((r) =>
      r.id === ressource.id ? ressource : r
    ),
  })),

  on(deleteRessource, (state, { id }) => ({
    ...state,
    ressources: state.ressources.filter((t) => t.id !== id),
  })),

  on(load, (state) => ({ ...state, loading: true })),
  on(loadSuccess, (state, { ressources, events }) => ({
    ...state,
    ressources,
    events,
    loading: true,
  })),
  on(loadFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(loadRessources, (state) => ({ ...state, loading: true })),
  on(loadRessourcesSuccess, (state, { ressources }) => ({
    ...state,
    ressources,
    events: state.events,
    loading: true,
  })),
  on(loadRessourcesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(loadEvents, (state) => ({ ...state, loading: true })),
  on(loadEventsSuccess, (state, { events }) => ({
    ...state,
    ressources: state.ressources,
    events,
    loading: true,
  })),
  on(loadEventsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(addEvent, (state, { event }) => ({
    ...state,
    events: [...state.events, event],
  })),

  on(updateEvent, (state, { event }) => ({
    ...state,
    events: state.events.map((e) => (e.id === event.id ? event : e)),
  })),

  on(deleteEvent, (state, { id }) => ({
    ...state,
    events: state.events.filter((e) => e.id !== id),
  }))
);
