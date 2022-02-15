import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import {UserComponent} from './user/user.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'repo', component: RepoComponent},
  {path:'landing', component: LandingComponent},
  {path: 'repo/:id', component: RepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
