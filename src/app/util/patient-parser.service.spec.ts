import { TestBed } from '@angular/core/testing';

import { PatientParserService } from './patient-parser.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('PatientParserService', () => {
  let service: PatientParserService;
  const onePatientPath = 'assets/one_patient.json';
  const allPatients = 'assets/manyPatients.json';
  const practitioner = 'assets/practitioner.json';
  const observation = 'assets/observationForPatient.json';
  const condition = 'assets/conditionForPatient.json';
  const procedure = 'assets/procedure.json';
  const medicationRequest = 'assets/medicationRequest.json';

  let http: HttpClient;
  //
  // let onePatientJson: any;
  // let allPatientsJson: any;
  // let practitionerJson: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PatientParserService);
    http = TestBed.inject(HttpClient);
  });

  it('PatientParserService was created', () => {
    expect(service).toBeTruthy();
  });


  it('Conditions were parsed', () => {
    http.get(condition)
      .toPromise()
      .then(response => {
        //const response = r;
        const result = service.getConditions(response);
        expect(result.length).toBe(15);
        //expect(result.length).toBe(15);
      });
  });

  it('Observation was parsed', () => {
    http.get(observation)
      .toPromise()
      .then(response => {
        //const response = r;
        const result = service.getObservations(response);
        expect(result.length).toBe(50);
      });
  });

  it('MedicationRequest was parsed', () => {
    http.get(medicationRequest)
      .toPromise()
      .then(response => {
        // const response = r;
        const result = service.getMedicationRequests(response);
        expect(result.length).toBe(5);
      });
  });

  it('Procedures were parsed', () => {
    http.get(procedure)
      .toPromise()
      .then(response => {
        // const response = r;
        const result = service.getProcedures(response);
        expect(result.length).toBe(10);
      });
  });

  it('Practitioner was parsed', () => {
    http.get(practitioner)
      .toPromise()
      .then(response => {
        // const response = r;
        const result = service.getProcedures(response);
        expect(result.length).toBe(50);
      });
  });

  it('Patients were parsed', () => {
    http.get(allPatients)
      .toPromise()
      .then(response => {
        // const response = r;
        const result = service.getPatients(response);
        expect(result.length).toBe(50);
      });
  });


  // it('One patient was parsed', () => {
  //   http.get(onePatientPath)
  //     .toPromise()
  //     .then(response => {
  //       // const response = r;
  //       const result = service.getPatients(response);
  //       expect(result.length).toBe(1); //or 50
  //     });
  // });


});
