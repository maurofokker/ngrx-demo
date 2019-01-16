import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './users.reducer';
import { configReducers } from './configs.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers
};
