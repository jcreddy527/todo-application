import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskupdateComponent } from './taskupdate/taskupdate.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TodoService } from './todo.service';
import { StatusPipe } from './status.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskupdateComponent,
    TasklistComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'add', component: TaskComponent },
      {path: 'update', component: TaskupdateComponent },
      { path: 'list', component: TasklistComponent},
    ]),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
