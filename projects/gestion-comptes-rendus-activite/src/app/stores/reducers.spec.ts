import { DayPilot } from 'daypilot-pro-angular';

import { load, loadFailure, loadSuccess } from './actions';
import * as fromEvents from './reducers';

describe('Users reducers', () => {
  it('[Users API] Load', () => {
    // arrange
    const ressources: DayPilot.ResourceData[] = [];
    const events: DayPilot.EventData[] = [];

    const action = load();

    const expectedState: fromEvents.UserState = {
      ...fromEvents.initialState,
      ressources,
      events,
      loading: true,
    };

    // act
    const result = fromEvents.userReducer(fromEvents.initialState, action);
    // assert
    expect(result).toEqual(expectedState);
  });

  it('[Users API] Load Succes', () => {
    // arrange
    const ressources: DayPilot.ResourceData[] = [];
    const events: DayPilot.EventData[] = [];

    const action = loadSuccess({ ressources, events });

    const expectedState: fromEvents.UserState = {
      ...fromEvents.initialState,
      ressources,
      events,
      loading: true,
    };

    // act
    const result = fromEvents.userReducer(fromEvents.initialState, action);
    // assert
    expect(result).toEqual(expectedState);
  });

  it('[Users API] Load Failure', () => {
    // arrange
    const error = 'error';
    const action = loadFailure({
      error,
    });

    const expectedState: fromEvents.UserState = {
      ...fromEvents.initialState,
      error,
      loading: false,
    };

    // act
    const result = fromEvents.userReducer(fromEvents.initialState, action);
    // assert
    expect(result).toEqual(expectedState);
  });
});
