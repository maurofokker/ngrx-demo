import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

// enum with action types in a single spot
export enum UserActionsTypes {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
  public readonly type: UserActionsTypes.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type: UserActionsTypes.GetUsersSuccess;
  constructor(public payload: User[]) { }
}

export class GetUser implements Action {
  public readonly type: UserActionsTypes.GetUser;
  constructor(public payload: number) { }
}

export class GetUserSuccess implements Action {
  public readonly type: UserActionsTypes.GetUserSuccess;
  constructor(public payload: User) { }
}

// export a type with declaration merging... can be this type or that type
export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
