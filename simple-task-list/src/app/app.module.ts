import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { TaskService } from './task.service';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AboutComponent } from './about/about.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CapitalizePipe,
    TaskSummaryComponent,
    HomeComponent,
    TaskListComponent,
    AboutComponent,
    TaskDetailComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}