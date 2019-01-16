import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { UsersService } from 'src/app/services/users.service';
import { GetUser, UserActionsTypes, GetUserSuccess, GetUsers, GetUsersSuccess } from '../actions/user.actions';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { UserHattp } from 'src/app/models/http/user-http.model';
import { selectUserList } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {

  @Effect() getUser$ = this._actions$.pipe(
    ofType<GetUser>(UserActionsTypes.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      console.log('SWITCH MAP', id, users);
      // const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess({
        'id': 1,
        'name': 'Peter Parker',
        'cardNumber': 'XXXX-XXXX-XXXX-1234',
        'cardType': 'Visa'
      })); // selectedUser
    })
  );

  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(UserActionsTypes.GetUsers),
    switchMap(() => this._usersService.getUsers()),
    switchMap((userHttp: UserHattp) => of(new GetUsersSuccess(userHttp.users)))
  );

  constructor(
    private _usersService: UsersService,
    private _actions$: Actions,
    private _store: Store<AppState>
  ) { }
}
