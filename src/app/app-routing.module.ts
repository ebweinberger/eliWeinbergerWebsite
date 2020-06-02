import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';


const routes: Routes = [
  // {path:"/", component: HomeComponent},
  {path: "speckles", component: ProjectComponent},
  {path: "vercel", component: ProjectComponent},
  {path: "heatmap", component: ProjectComponent},
  {path: "thissite", component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
