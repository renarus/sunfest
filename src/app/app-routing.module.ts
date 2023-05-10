import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SunfestComponent } from './components/sunfest/sunfest.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "sunfest", component: SunfestComponent },
  { path: "artists", component:ArtistsComponent },
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
