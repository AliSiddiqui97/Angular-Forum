import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingpageComponent} from '../app/landingpage/landingpage.component';
import {ProfilepageComponent} from '../app/profilepage/profilepage.component';
import {ThreadviewComponent} from '../app/threadview/threadview.component'

const routes: Routes = [
  {path:"landingpage", component:LandingpageComponent },
  {path:"profilepage", component: ProfilepageComponent},
  {path:"threadviewpage", component: ThreadviewComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
