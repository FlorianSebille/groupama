import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  loadEvents,
  loadEventsFailure,
  loadEventsSuccess,
  loadRessources,
  loadRessourcesFailure,
  loadRessourcesSuccess,
  loadUsers,
  loadUsersSuccess,
} from './actions';
import { catchError, map, switchMap, of, mergeMap } from 'rxjs';
import { UsersService } from './service';

@Injectable()
export class UserEffects {
  loadRessources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRessources),
      switchMap(() =>
        this.userService.getRessources().pipe(
          map((ressources) => loadRessourcesSuccess({ ressources })),
          catchError((error) => of(loadRessourcesFailure({ error })))
        )
      )
    )
  );

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap((_) =>
        this.userService.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => of(loadEventsFailure({ error })))
        )
      )
    )
  );

  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEvents),
      switchMap((_) =>
        this.userService.getEvents().pipe(
          map((events) => loadEventsSuccess({ events })),
          catchError((error) => of(loadEventsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UsersService) {}
}
