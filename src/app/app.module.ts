import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { MetricsComponent } from './metrics/metrics.component';
import {HttpClientModule} from '@angular/common/http';
import {FhirhttpService} from './util/fhirhttp.service';
import { CardComponent } from './ui/card/card.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ComplaintsCardComponent } from './ui/complaints-card/complaints-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfileComponent,
    ComplaintsComponent,
    ComplaintDetailsComponent,
    MetricsComponent,
    CardComponent,
    NavigationComponent,
    ComplaintsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()

  ],
  providers: [
    FhirhttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
