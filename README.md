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

