import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GetConfigSuccess, ConfigActionsType, GetConfig } from '../actions/config.actions';
import { Config } from 'src/app/models/config.model';
import { ConfigService } from 'src/app/services/config.service';

@Injectable()
export class ConfigEffects {

  @Effect()
  getConfig$ = this._actions$.pipe(
    ofType<GetConfig>(ConfigActionsType.GetConfig),
    switchMap(() => this._configService.getConfig()),
    switchMap((config: Config) => {
      return of(new GetConfigSuccess(config));
    })
  );

  constructor(
    private _configService: ConfigService,
    private _actions$: Actions) {}

}
