import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {FhirhttpService} from './util/fhirhttp.service';
import { CardComponent } from './ui/card/card.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ComplaintsCardComponent } from './ui/complaints-card/complaints-card.component';
import {CommonModule} from '@angular/common';
import {PatientService} from './service/patient.service';
import { GenericCardComponent } from './ui/generic-card/generic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfileComponent,
    CardComponent,
    NavigationComponent,
    ComplaintsCardComponent,
    GenericCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()

  ],
  providers: [
    FhirhttpService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
