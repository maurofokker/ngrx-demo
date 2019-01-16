import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';

const routes: Routes = [
 // { path: 'users', component: UsersComponent },
 // { path: 'user/:id', component: UserDetailsComponent },
 // { path: '', redirectTo: '/users', pathMatch: 'full' }
  { path: '', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
