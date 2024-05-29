import { createSelector } from '@ngrx/store';
import { DayPilot } from 'daypilot-pro-angular';
import { AppState } from './store';

// La première fonction amène vers le state users

const selectUserListState$ = (state: AppState) => state.users;

export const selectEventsByUser$ = (ressource: DayPilot.ResourceData) =>
  createSelector(selectUserListState$, (users) => users);

export const selectEvents$ = createSelector(
  selectUserListState$,
  (users) => users.events
);

export const selectRessources$ = createSelector(
  selectUserListState$,
  (users) => users.ressources
);
