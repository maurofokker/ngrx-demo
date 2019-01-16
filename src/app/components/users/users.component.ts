import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { Router, ActivatedRoute } from '@angular/router';
import { selectUserList, selectSelectedUser } from 'src/app/store/selectors/user.selectors';
import { GetUsers, GetUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));

  user$ = this._store.pipe(select(selectSelectedUser));


  constructor(
    private _store: Store<AppState>
    , private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    // debugger;
    this._store.dispatch(new GetUsers());
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}
