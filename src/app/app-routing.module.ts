import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ProfileComponent} from './profile/profile.component';
import {MetricsComponent} from './metrics/metrics.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {ComplaintDetailsComponent} from './complaint-details/complaint-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search'
  },
  {
    path: 'search',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'metrics',
    component: MetricsComponent,
    pathMatch: 'full'
  },
  {
    path: 'complaints',
    component: ComplaintsComponent,
    pathMatch: 'full'
  },
  {
    path: 'complaint-details',
    component: ComplaintDetailsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
