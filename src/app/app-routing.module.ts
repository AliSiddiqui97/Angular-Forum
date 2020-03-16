import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingpageComponent} from '../app/landingpage/landingpage.component';
import {ProfilepageComponent} from '../app/profilepage/profilepage.component';

const routes: Routes = [
  {path:"landingpage", component:LandingpageComponent },
  {path:"profilepage", component: ProfilepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
