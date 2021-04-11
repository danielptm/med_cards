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
    if (this.patientService.patients.length === 0) {
      this.fhir.initialize()
        .then((patients: any) => {
          const result = this.parser.getPatients(patients);
          this.patientService.setPatients(result);
          this.patients.push(...result);
          this.cachedPatients.push(...result);
        });
    } else {
      this.patients.push(...this.patientService.patients);
      this.cachedPatients.push(...this.patientService.patients);
    }
  }

  filter(text): void {
    if (text.length === 0 && this.patients.length < this.cachedPatients.length) {
      this.patients = [];
      this.patients.push(...this.cachedPatients);
    }
    this.patients = this.patients.filter((item) => item.firstName.includes(text) || item.id.includes(text));
  }

}
