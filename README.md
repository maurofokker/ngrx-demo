# NgrxDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## NgRx WorkFlow

1. Create folder associated to the `store` and sub-folders
   1. `actions`
   2. `effects`
   3. `reducers`
   4. `selectors`
   5. `state`
2. Create the initial `State` object for the features and the initial values (`store/state/[user|config].state.ts`)
3. Create the app state that contains all features state and the router state (`store/state/app.state.ts`)
4. Create the `Actions`
   1. Create enum with action types in a single spot
   2. Each class with action should implement `Action` interface from `@ngrx/store`
   3. Finally export a type with declaration merging (actions classes)... can be this type or that type. This will provide type checking that can be used in the reducers
5. Create the `Reducers`
   1. Reducers responds to some actions, because some others are handled by `effects`
   2. Reducers receive the feature state and action, and return a new feature state
   3. Using switch statement generate cases for each action type
   4. Each case return a new state object with the result of merging the old state and the new value
   5. All reducers have a default result that returns the state without any changes
   6. Finally declare an `AppReducer` that add all the reducers to an action reducer map from `@ngrx/store` to add type checking
6. Create the `Selectors`
   1. `createSelector` method of `@ngrx/store` can be used to return the slice of the store that the selector refers to
      1. First param is the slice of the store that is going to use to get the data from (it can be an array with multiple parts of the state)
      2. Second param is the anonymous function that is going to resolve what the selector is going to return
      3. `createSelector` returns a Memoized selector, if nothing has changed returns the last known part if something has changed then returns the latest
7. Create the `Effects` (in case you need to handle some actions that have _side effects_ as a middleware of the reducers)
   1. Declare the effect class using the `@Injectable` decorator
   2. In the `constructor` inject services that are going to be used, actions for `@ngrx/effects` in case you require, everything that you will need in the `Effect`
   3. The effect is declared using the `@Effect()` decorator provided by `@ngrx/effects`
      1. Using the `Actions` object provided by ``@ngrx/effects` to start piping the operators for the specific effect
         1. Set the effect action type using the `ofType<T>` operator
         2. Use `rxjs` operators to get what you need from the stream [rxjs docs](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)
         3. In the last operator, the `Effect` is gonna dispatch another action 
      2. Another way is using `nrwl` `DataPersistence` API and `Entities`

