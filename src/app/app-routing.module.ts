import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
 import { LoginPageComponent } from './pages/login-page/login-page.component';
 import { SignupPageComponent } from './pages/signup-page/signup-page.component';
 import { PullrequestComponent } from './pages/pullrequest/pullrequest.component';
 import { EditTaskComponent } from 'src/app/edit-task/edit-task.component';
 import { DashbordComponent } from './pages/dashbord/dashbord.component';
 import { PullRequestsComponent } from 'src/app/pull-requests/pull-requests.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'new-list', component: NewListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'lists', component: TaskViewComponent },
  { path: 'addpullrequest', component: PullrequestComponent},
  { path: 'edittask' , component: EditTaskComponent},
  { path: 'view-pull-request', component: DashbordComponent},
  { path: 'pull-requests', component: PullRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
