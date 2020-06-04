import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "speckles", component: ProjectComponent},
  {path: "vercel", component: ProjectComponent},
  {path: "heatmap", component: ProjectComponent},
  {path: "thissite", component: ProjectComponent},
  // {path: **, component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
