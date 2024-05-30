import { createReducer, on } from '@ngrx/store';
import {
  addEvent,
  addRessource,
  deleteEvent,
  deleteRessource,
  loadEvents,
  loadEventsFailure,
  loadEventsSuccess,
  loadRessources,
  loadRessourcesFailure,
  loadRessourcesSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  updateEvent,
  updateRessource,
} from './actions';
import { UserModel } from './user.model';

export interface UserState {
  users: UserModel;
  loading: boolean;
  error: string;
}
export const initialState: UserState = {
  users: {
    ressources: [],
    events: [],
  },
  loading: false,
  error: '',
};
export const userReducer = createReducer(
  initialState,

  on(addRessource, (state, { ressource }) => ({
    ...state,
    ressources: [...state.users.ressources, ressource],
  })),

  on(updateRessource, (state, { ressource }) => ({
    ...state,
    ressources: state.users.ressources.map((r) =>
      r.id === ressource.id ? ressource : r
    ),
  })),

  on(deleteRessource, (state, { id }) => ({
    ...state,
    ressources: state.users.ressources.filter((t) => t.id !== id),
  })),

  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: true,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(loadRessources, (state) => ({ ...state, loading: true })),
  on(loadRessourcesSuccess, (state, { ressources }) => ({
    ...state,
    ressources,
    events: state.users.events,
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
    ressources: state.users.ressources,
    events,
    loading: true,
  })),
  on(loadEventsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(addEvent, (state, action) => ({
    ...state,
    events: state.users.events.concat(action.event),
  })),

  on(updateEvent, (state, { event }) => ({
    ...state,
    events: state.users.events.map((e) => (e.id === event.id ? event : e)),
  })),

  on(deleteEvent, (state, { id }) => ({
    ...state,
    events: state.users.events.filter((e) => e.id !== id),
  }))
);
