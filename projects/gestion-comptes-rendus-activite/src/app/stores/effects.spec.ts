import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { DayPilot } from 'daypilot-pro-angular';

import { UserEffects } from './effects';
import * as Actions from './actions';
import { UserModel } from './user.model';

describe('My Effects', () => {
  let effects: UserEffects;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // any modules needed
      ],
      providers: [
        UserEffects,
        provideMockActions(() => actions),
        // other providers
      ],
    });

    effects = TestBed.inject(UserEffects);
  });

  it('load should work', () => {
    let users: UserModel = {
      ressources: [
        {
          name: 'Utilisateur n°1',
          id: 'U1',
          expanded: true,
          children: [
            { name: 'Projet n°1', id: 'U1P1', capacity: 10 },
            { name: 'Projet n°2', id: 'U1P2', capacity: 10 },
            { name: 'Projet n°3', id: 'U1P3', capacity: 10 },
            { name: 'Vacances', id: 'U1VAC', capacity: 10 },
          ],
        },
        {
          name: 'Utilisateur n°2',
          id: 'U2',
          expanded: true,
          children: [
            { name: 'Projet n°1', id: 'U2P1', capacity: 10 },
            { name: 'Projet n°2', id: 'U2P2', capacity: 10 },
            { name: 'Projet n°3', id: 'U2P3', capacity: 10 },
            { name: 'Vacances', id: 'U2VAC', capacity: 10 },
          ],
        },
        {
          name: 'Utilisateur n°3',
          id: 'U3',
          expanded: true,
          children: [
            { name: 'Projet n°1', id: 'U3P1', capacity: 10 },
            { name: 'Projet n°2', id: 'U3P2', capacity: 10 },
            { name: 'Projet n°3', id: 'U3P3', capacity: 10 },
            { name: 'Vacances', id: 'U3VAC', capacity: 10 },
          ],
        },
      ],
      events: [
        {
          id: '1',
          resource: 'U1P1',
          start: '2024-05-03',
          end: '2024-05-08',
          text: 'Scheduler Event 1',
          barColor: '#e69138',
        },
        {
          id: '2',
          resource: 'U1P2',
          start: '2024-05-18',
          end: '2024-05-22',
          text: 'Scheduler Event 2',
          barColor: '#e69138',
        },
        {
          id: '3',
          resource: 'U1VAC',
          start: '2024-05-23',
          end: '2024-05-28',
          text: 'Séjour à Londre',
          barColor: '#e69138',
        },
        {
          id: '4',
          resource: 'U2P2',
          start: '2024-05-03',
          end: '2024-05-08',
          text: 'Scheduler Event 1',
          barColor: '#e69138',
        },
        {
          id: '5',
          resource: 'U3P3',
          start: '2024-05-18',
          end: '2024-05-22',
          text: 'Scheduler Event 2',
          barColor: '#e69138',
        },
      ],
    };

    const action = Actions.loadUsers();
    const completion = Actions.loadUsersSuccess({ users });

    // Refer to 'Writing Marble Tests' for details on '--a-' syntax
    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadUsers$).toBeObservable(expected);
  });

  it('load events should work', () => {
    let events: DayPilot.EventData[] = [
      {
        id: '1',
        resource: 'U1P1',
        start: '2024-05-03',
        end: '2024-05-08',
        text: 'Scheduler Event 1',
        barColor: '#e69138',
      },
      {
        id: '2',
        resource: 'U1P2',
        start: '2024-05-18',
        end: '2024-05-22',
        text: 'Scheduler Event 2',
        barColor: '#e69138',
      },
      {
        id: '3',
        resource: 'U1VAC',
        start: '2024-05-23',
        end: '2024-05-28',
        text: 'Séjour à Londre',
        barColor: '#e69138',
      },
      {
        id: '4',
        resource: 'U2P2',
        start: '2024-05-03',
        end: '2024-05-08',
        text: 'Scheduler Event 1',
        barColor: '#e69138',
      },
      {
        id: '5',
        resource: 'U3P3',
        start: '2024-05-18',
        end: '2024-05-22',
        text: 'Scheduler Event 2',
        barColor: '#e69138',
      },
    ];

    const action = Actions.loadEvents();
    const completion = Actions.loadEventsSuccess({ events });

    // Refer to 'Writing Marble Tests' for details on '--a-' syntax
    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadEvents$).toBeObservable(expected);
  });

  it('load ressources should work', () => {
    let ressources: DayPilot.ResourceData[] = [
      {
        name: 'Utilisateur n°1',
        id: 'U1',
        expanded: true,
        children: [
          { name: 'Projet n°1', id: 'U1P1', capacity: 10 },
          { name: 'Projet n°2', id: 'U1P2', capacity: 10 },
          { name: 'Projet n°3', id: 'U1P3', capacity: 10 },
          { name: 'Vacances', id: 'U1VAC', capacity: 10 },
        ],
      },
      {
        name: 'Utilisateur n°2',
        id: 'U2',
        expanded: true,
        children: [
          { name: 'Projet n°1', id: 'U2P1', capacity: 10 },
          { name: 'Projet n°2', id: 'U2P2', capacity: 10 },
          { name: 'Projet n°3', id: 'U2P3', capacity: 10 },
          { name: 'Vacances', id: 'U2VAC', capacity: 10 },
        ],
      },
      {
        name: 'Utilisateur n°3',
        id: 'U3',
        expanded: true,
        children: [
          { name: 'Projet n°1', id: 'U3P1', capacity: 10 },
          { name: 'Projet n°2', id: 'U3P2', capacity: 10 },
          { name: 'Projet n°3', id: 'U3P3', capacity: 10 },
          { name: 'Vacances', id: 'U3VAC', capacity: 10 },
        ],
      },
    ];

    const action = Actions.loadRessources();
    const completion = Actions.loadRessourcesSuccess({ ressources });

    // Refer to 'Writing Marble Tests' for details on '--a-' syntax
    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadRessources$).toBeObservable(expected);
  });
});
