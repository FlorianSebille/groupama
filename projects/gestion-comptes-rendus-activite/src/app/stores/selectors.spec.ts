import { TestBed } from '@angular/core/testing';
import { UserState } from './reducers';
import { selectEvents$, selectRessources$ } from './selectors';

import { provideMockStore } from '@ngrx/store/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [provideMockStore({})],
  });
});

describe('Selectors', () => {
  const initialState: UserState = {
    users: {
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
      ],
    },
    loading: false,
    error: '',
  };

  it('should select selectEvents', () => {
    // Act
    const result = selectEvents$.projector(initialState);

    // Assert
    expect(result).toBeDefined();
    expect(result.length).toEqual(2);
    expect(result[0].text).toEqual('Scheduler Event 1');
    expect(result[1].resource).toEqual('U1P2');
  });

  it('should select selectRessources', () => {
    // Act
    const result = selectRessources$.projector(initialState);

    // Assert
    expect(result).toBeDefined();
    expect(result.length).toEqual(2);
    expect(result[0].children?.length).toEqual(4);
    expect(result[1].id).toEqual('U2');
  });
});
