import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WorkshopProfilingSingleComponent
} from "./workshops/workshop-profiling-single/workshop-profiling-single.component";
import { WorkshopProfilingManyComponent } from "./workshops/workshop-profiling-many/workshop-profiling-many.component";
import { WorkshopGameComponent } from "./workshops/workshop-game/workshop-game.component";
import {WorkshopClocksComponent} from "./workshops/workshop-clocks/workshop-clocks.component";

const routes: Routes = [
  { path: 'profiling-single', component: WorkshopProfilingSingleComponent },
  { path: 'profiling-many', component: WorkshopProfilingManyComponent },
  { path: 'game', component: WorkshopGameComponent },
  { path: 'clocks', component: WorkshopClocksComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
