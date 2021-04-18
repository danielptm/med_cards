import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/patient';
import {FhirhttpService} from '../util/fhirhttp.service';
import {PatientService} from '../service/patient.service';
import {PatientParserService} from '../util/patient-parser.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private fhir: FhirhttpService, private patientService: PatientService, private parser: PatientParserService, private router: Router) { }

  patients: Patient[] = [];
  cachedPatients: Patient[] = [];

  ngOnInit(): void {

  }

  search(text): void {
    this.fhir.getPatient(text)
      .then((response) => {
        // 9da7d8c2-daef-4722-832e-dcf495d13a4e
        console.log(response);
        const patientState = new Patient();
        patientState.id = response.id;
        patientState.firstName = response.entry[0].resource.name[0].given[0];
        patientState.lastName = response.entry[0].resource.name[0].family;
        patientState.gender = response.entry[0].resource.gender;
        patientState.birthDate = response.entry[0].resource.birthDate;

        patientState.observations.push(...this.parser.getObservations(response));
        patientState.conditions.push(...this.parser.getConditions(response));
        patientState.clinicalImpressions.push(...this.parser.getClinicalImpressions(response));
        patientState.diagnosticImages.push(...this.parser.getImagingStudies(response));

        this.patientService.setPatient(patientState);

        this.router.navigate(['/profile/' + this.patientService.getPatient().id]);
      }, e => {
        alert('There was an error with id: ' + text);
      });
  }

}
