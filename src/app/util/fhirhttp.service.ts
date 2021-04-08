import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Practitioner} from '../model/practitioner';

@Injectable({
  providedIn: 'root'
})
export class FhirhttpService {
  originalUrl = 'https://launch.smarthealthit.org/v/r4/sim/eyJoIjoiMSIsImkiOiIxIiwiaiI6IjEiLCJlIjoiMzc4ODEwODYtN2IwNS00YjE4LWEyNzktMDhlMzMxZjUwZTliIn0/fhir';
  startUrl = this.originalUrl + '/metadata';
  patientUrl = this.originalUrl + '/Patient';
  practitionerUrl = this.originalUrl + '/Practitioner';

  aud = this.startUrl;
  redirectUri = 'http://localhost:8000';

  authorizeUri: string;

  authorizedUrlEncoded: string;

  practitioner: string;

  constructor(private http: HttpClient) { }

  getPractitioner(): Promise<any> {
    return this.http.get('http://localhost:8080/api/practitioner').toPromise();
  }

  initialize(): Promise<any> {
    return new Promise(resolve => {
      this.http.get(this.startUrl)
        .toPromise()
        .then((response: any) => {
          this.authorizeUri = response.rest[0].security.extension[0].extension[0].valueUri;
          console.log(this.authorizeUri);
          this.authorizedUrlEncoded = this.authorizeUri + '?aud=' + encodeURI(this.startUrl) + '&redirect_uri=' + encodeURI(this.redirectUri);
          this.http.get(this.authorizedUrlEncoded);

          this.http.get('https://launch.smarthealthit.org/v/r4/sim/eyJoIjoiMSIsImkiOiIxIiwiaiI6IjEiLCJlIjoiMzc4ODEwODYtN2IwNS00YjE4LWEyNzktMDhlMzMxZjUwZTliIn0/fhir/Practitioner')
            .toPromise()
            .then((res: any) => {
              this.practitioner = res.entry[0].resource.name;
              // console.log(this.practitioner);
              resolve(this.practitioner);
            });
        }, e => {
          console.error(e);
        });
    });
  }
}
