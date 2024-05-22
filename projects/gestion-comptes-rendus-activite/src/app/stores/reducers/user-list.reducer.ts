import { UserListModule } from '../actions/user-list.action';
import { UsersListState } from '../../models/users.model';
import { usersMock } from '../../mocks/user-list';

// les valeurs par défaut du state
const initialState: UsersListState = {
  data: null,
  loading: false,
  loaded: false,
};

// la fonction reducer de la user
export function usersReducer(
  state: UsersListState = initialState,
  action: UserListModule.Actions
): UsersListState {
  switch (action.type) {
    // L'action de InitUsers
    case UserListModule.ActionTypes.INIT_USERS:
      return {
        ...state,
        data: usersMock, // Injecte le mock
      };

    case UserListModule.ActionTypes.CREATE_USER:
      return {
        ...state,
        data: state.data,
      };

    default:
      return state;
  }
}
