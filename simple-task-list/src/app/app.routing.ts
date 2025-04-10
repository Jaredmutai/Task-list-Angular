import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AboutComponent } from './about/about.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },           // Home page
  { path: 'tasks', component: TaskListComponent },  // Tasks page
  { path: 'tasks/:id', component: TaskDetailComponent }, // Task detail with parameter
  { path: 'about', component: AboutComponent },     // About page
  { path: '**', redirectTo: '' }                    // Wildcard redirects to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}