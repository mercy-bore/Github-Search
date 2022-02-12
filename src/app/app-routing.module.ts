import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import {UserComponent} from './user/user.component';
import {NotFoundComponent} from './not-found/not-found.component'

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'repo', component: RepoComponent},
  { path:'**', component:NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
