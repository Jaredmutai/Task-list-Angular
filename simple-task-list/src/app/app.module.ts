import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CapitalizePipe } from './capitalize.pipes';
import { TaskService } from './task.service';

@NgModule({
  declarations: [AppComponent, HighlightDirective, CapitalizePipe],
  imports: [BrowserModule, FormsModule],
  providers: [TaskService], // Optional: only needed if not using providedIn: 'root'
  bootstrap: [AppComponent]
})
export class AppModule {}