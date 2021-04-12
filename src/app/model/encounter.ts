import {Patient} from './patient';

export class Encounter {
  // Types or Codings?
  types: string[] = [];
  patient: Patient;
  // Practitioner?
  // Do we want both start and end, or just start?
  periodStart: string;
  // Service provider / organization?
}
