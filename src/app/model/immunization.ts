import {Encounter} from './encounter';
import {Patient} from './patient';

export class Immunization {
  vaccineCode: string;
  occurrenceDateTime: string;
  patient: Patient;
  encounter: Encounter;
}
