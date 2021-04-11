import {Injectable} from '@angular/core';
import {Patient} from '../model/patient';
import {Observation} from '../model/observation';
import {Condition} from '../model/condition';
import {Procedure} from '../model/procedure';
import {MedicationRequest} from '../model/medication-request';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patient: Patient;
  patientObservations: Observation[] = [];
  patientConditions: Condition[] = [];
  patientProcedures: Procedure[] = [];
  patientMedicationRequests: MedicationRequest[] = [];

  patients: Patient[] = [];

  constructor() { }

  setPatientObservations(observations: Observation[]): void {
    this.patientObservations = [];
    this.patientObservations.push(...observations);
  }

  setPatientConditions(conditions: Condition[]): void  {
    this.patientConditions = [];
    this.patientConditions.push(...conditions);
  }

  setPatientProcedures(procedures: Procedure[]): void  {
    this.patientProcedures = [];
    this.patientProcedures.push(...procedures);
  }

  setMedicationRequests(requests: MedicationRequest[]): void  {
    this.patientMedicationRequests = [];
    this.patientMedicationRequests.push(...requests);
  }

  setPatient(patient: Patient): void {
    this.patient = patient;
  }

  setPatients(patients: Patient[]): void {
    this.patients = patients;
  }

  getConditions(): Condition[] {
    return this.patientConditions;
  }
}
