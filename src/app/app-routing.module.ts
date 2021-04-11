import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ProfileComponent} from './profile/profile.component';
import {MetricsComponent} from './metrics/metrics.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {ProceduresComponent} from './procedures/procedures.component';

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
    path: 'profile/:id',
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
    path: 'procedures',
    component: ProceduresComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
