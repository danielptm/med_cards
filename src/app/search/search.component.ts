import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/patient';
import {FhirhttpService} from '../util/fhirhttp.service';
import {PatientService} from '../service/patient.service';
import {PatientParserService} from '../util/patient-parser.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private fhir: FhirhttpService, private patientService: PatientService, private parser: PatientParserService) { }

  patients: Patient[] = [];
  cachedPatients: Patient[] = [];

  ngOnInit(): void {

  }

  search(text): void {
    this.fhir.getPatientAll(text)
      .then((response) => {
        // Parse the response here. Get the Observations, conditions etc.
        console.log(response);
      });
  }

}
