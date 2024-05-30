import { DayPilot } from 'daypilot-pro-angular';

import { loadUsers, loadUsersFailure, loadUsersSuccess } from './actions';
import * as fromEvents from './reducers';
import { UserModel } from './user.model';

describe('Users reducers', () => {
  it('[Users API] Load', () => {
    // arrange
    const users: UserModel = {
      ressources: [],
      events: [],
    };

    const action = loadUsers();

    const expectedState: fromEvents.UserState = {
      ...fromEvents.initialState,
      users,
      loading: true,
    };

    // act
    const result = fromEvents.userReducer(fromEvents.initialState, action);
    // assert
    expect(result).toEqual(expectedState);
  });

  it('[Users API] Load Succes', () => {
    // arrange
    const users: UserModel = {
      ressources: [],
      events: [],
    };

    const action = loadUsersSuccess({ users });

    const expectedState: fromEvents.UserState = {
      ...fromEvents.initialState,
      users,
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
    const action = loadUsersFailure({
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
