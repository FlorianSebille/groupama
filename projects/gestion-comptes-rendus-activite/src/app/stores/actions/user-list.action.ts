import { User } from '../../models/users.model';

export namespace UserListModule {
  export enum ActionTypes {
    INIT_USERS = '[user] Init users',
    CREATE_USER = '[user] Create user',
  }

  export class InitUsers {
    readonly type = ActionTypes.INIT_USERS;
  }

  export class CreateUser {
    readonly type = ActionTypes.CREATE_USER;
    constructor(public payload: User) {}
  }

  export type Actions = InitUsers | CreateUser;
}
