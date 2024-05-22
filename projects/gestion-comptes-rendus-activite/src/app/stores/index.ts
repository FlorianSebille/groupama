import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { usersReducer } from './reducers/user-list.reducer';
import { UsersListState } from '../models/users.model';

// Le root reducer
const reducers = {
  users: usersReducer,
};

export interface AppState {
  users: UsersListState;
}
// Nécéssaire pour l'AOT
export function getReducers() {
  return reducers;
}
// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'Registered Reducers'
);
