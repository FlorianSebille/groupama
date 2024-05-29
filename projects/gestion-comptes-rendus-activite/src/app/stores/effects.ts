import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  load,
  loadEvents,
  loadEventsFailure,
  loadEventsSuccess,
  loadRessources,
  loadRessourcesFailure,
  loadRessourcesSuccess,
} from './actions';
import { catchError, map, mergeMap, switchMap, of, Observable } from 'rxjs';
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

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(load),
      switchMap((_) =>
        this.userService.getRessources().pipe(
          map((ressources) => loadRessourcesSuccess({ ressources })),
          catchError((error) => of(loadRessourcesFailure({ error })))
        )
      ),
      switchMap((_) =>
        this.userService.getEvents().pipe(
          map((events) => loadEventsSuccess({ events })),
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
