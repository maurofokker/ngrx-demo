import { User } from 'src/app/models/user.model';

// user state structure
export interface UserState {
  users: User[] | [];
  selectedUser: User | null;
}

// initial user state that implements the user state structrue
export const initialUserState: UserState = {
  users: null,
  selectedUser: null
};
