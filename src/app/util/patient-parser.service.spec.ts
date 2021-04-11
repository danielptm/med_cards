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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Parse conditions', () => {
    http.get(condition)
      .toPromise()
      .then(r => {
        const response = r;
        const result = service.getConditions(response);
        expect(result.length).toBe(15);
      });
  });

  it('Parse observation', () => {
    http.get(observation)
      .toPromise()
      .then(r => {
        const response = r;
        const result = service.getObservations(response);
        expect(result.length).toBe(50);
      });
  });

  it('Parse medicationRequest', () => {
    http.get(medicationRequest)
      .toPromise()
      .then(r => {
        const response = r;
        const result = service.getMedicationRequests(response);
        expect(result.length).toBe(5);
      });
  });

  it('Parse procedures', () => {
    http.get(procedure)
      .toPromise()
      .then(r => {
        const response = r;
        const result = service.getProcedures(response);
        expect(result.length).toBe(10);
      });
  });

  it('Parse practitioner', () => {
    http.get(practitioner)
      .toPromise()
      .then(r => {
        const response = r;
        const result = service.getProcedures(response);
        expect(result.length).toBe(50);
      });
  });

  it('Parse patients', () => {
    http.get(allPatients)
      .toPromise()
      .then(r => {
        const response = r;
        const result = service.getPatients(response);
        expect(result.length).toBe(50);
      });
  });


});
