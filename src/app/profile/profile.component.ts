import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FhirhttpService} from '../util/fhirhttp.service';
import {PatientService} from '../service/patient.service';
import {Patient} from '../model/patient';
import {PatientParserService} from '../util/patient-parser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  patient: Patient;

  constructor(private route: ActivatedRoute, private fhirService: FhirhttpService, private patientService: PatientService, private parse: PatientParserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params) {
        this.patient = this.patientService.patients.filter(p => p.id === params.id)[0];
        this.patientService.setPatient(this.patient);
        this.fhirService.getConditionsForPatient(this.patient.id)
          .then(c => {
            const result = this.parse.getConditions(c);
            this.patientService.setPatientConditions(result);
          });

        this.fhirService.getMedicationRequestsForPatient(this.patient.id)
          .then(mr => {
            const result = this.parse.getMedicationRequests(mr);
            this.patientService.setMedicationRequests(result);
          });

        this.fhirService.getObservationsForPatient(this.patient.id)
          .then(o => {
            const result = this.parse.getConditions(o);
            this.patientService.setPatientObservations(result);
          });

        this.fhirService.getProceduresForPattient(this.patient.id)
          .then(p => {
            const result = this.parse.getConditions(p);
            this.patientService.setPatientProcedures(result);
          });
      }
    });
  }
}
