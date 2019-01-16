import { initialUserState, UserState } from '../state/user.state';
import { UserActions, UserActionsTypes } from '../actions/user.actions';

export const userReducers = (state = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionsTypes.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }
    case UserActionsTypes.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    default:
      return state;
  }
};
