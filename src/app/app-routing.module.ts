import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { ShortsComponent } from './components/shorts/shorts.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo:'main/home',pathMatch:"full"},
  { path: 'main', redirectTo:'main/home',pathMatch:"full"},
  {path:"main",component:MainComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"shorts",component:ShortsComponent},
    {path:"subscriptions",component:SubscriptionsComponent},
    {path:"watch",component:PlayComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
