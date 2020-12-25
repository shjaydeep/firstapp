import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskViewComponent } from './pages/task-view/task-view.component';
 import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {FirebaseService} from './services/firebase.service';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { PullrequestComponent } from './pages/pullrequest/pullrequest.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { PullRequestsComponent } from './pull-requests/pull-requests.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    TaskViewComponent,
    DashbordComponent,
    NewListComponent,
    PullrequestComponent,
    EditTaskComponent,
    PullRequestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBa-2V4EaV9Bw6rSOQom1Ztdodf2AFlO9E",
      authDomain: "habit-tracker-fec25.firebaseapp.com",
      databaseURL: "https://habit-tracker-fec25-default-rtdb.firebaseio.com",
      projectId: "habit-tracker-fec25",
      storageBucket: "habit-tracker-fec25.appspot.com",
      messagingSenderId: "113423328825",
      appId: "1:113423328825:web:647be75a8529f4261a0fe8",
      measurementId: "G-793NCC49DQ"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
