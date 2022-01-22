import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { FreeSessionComponent } from './free-session/free-session.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LearningPathComponent } from './learning-path/learning-path.component';

const routes: Routes = [
  {
    path: 'register',
    component: HeaderComponent
  },
  {
    path: 'free-demo',
    component: FreeSessionComponent
  },
  {
    path: 'details',
    component: LearningPathComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
