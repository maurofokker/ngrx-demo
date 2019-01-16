import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserHattp } from '../models/http/user-http.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<UserHattp> {
    return this._http.get<UserHattp>(this.usersUrl);
  }

}
