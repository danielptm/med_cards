import {Patient} from './patient';
import {Encounter} from './encounter';
export class Procedure {
  code: string;
  // Do we want both start and end, or just start?
  performedPeriodStart: string;
  patient: Patient;
  encounter: Encounter;
}
