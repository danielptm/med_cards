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
        // 8d1f86a8-3284-43bd-b45e-5931948c97e4
        if (! response.entry) {
          alert(`Object with id ${text} does not exist`);
        }
        console.log(response);
        const patientState = new Patient();
        patientState.id = response.entry[0].resource.id;
        patientState.firstName = response.entry[0].resource.name[0].given[0];
        patientState.lastName = response.entry[0].resource.name[0].family;
        patientState.gender = response.entry[0].resource.gender;
        patientState.birthDate = response.entry[0].resource.birthDate;

        this.fhir.getConditionsForPatient(text)
          .then(result => {
            const x = result;
            patientState.conditions.push(...this.parser.getConditions(result));
            this.patientService.setPatient(patientState);
          });

        this.fhir.getObservationsForPatient(text)
          .then(result => {
            patientState.observations.push(...this.parser.getObservations(result));
            this.patientService.setPatient(patientState);
          });

        this.fhir.getClinicalImpressionForPatient(text)
          .then(result => {
            patientState.clinicalImpressions.push(...this.parser.getClinicalImpressions(result));
            this.patientService.setPatient(patientState);
          });

        this.fhir.getDiagnosticReportForpatient(text)
          .then(result => {
            patientState.diagnosticImages.push(...this.parser.getImagingStudies(result));
            this.patientService.setPatient(patientState);
          });

        this.fhir.getMedicationRequestsForPatient(text)
          .then(result => {
            patientState.medications.push(...this.parser.getMedicationRequests(result));
            this.patientService.setPatient(patientState);
          });
        setTimeout(() => {
          this.router.navigate(['/profile']);
        }, 1500);
      }, e => {
        alert('There was an error with id: ' + text);
      });
  }

}
