import {Patient} from './patient';
import {Encounter} from './encounter';
import {Condition} from './condition';

export class MedicationRequest {
  medicationCodeableConcept: string;
  patient: Patient;
  encounter: Encounter;
  // Practitioner?
  authoredOn: string;
  conditions: Condition[] = [];
}
