import { createSelector } from '@ngrx/store';
import { AppState } from '..';

// La première fonction amène vers le state users
export const selectUserListState$ = (state: AppState) => state.users;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectUsers$ = createSelector(
  selectUserListState$,
  (users) => users.data
);
