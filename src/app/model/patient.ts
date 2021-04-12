import {Condition} from './condition';
import {Observation} from './observation';
import {DiagnosticReport} from './diagnostic-report';
import {ImagingStudy} from './imaging-study';

export class Patient {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  // Should get only items that are stroke.
  conditions: Condition[] = [];

  // Observations related to stroke
  observations: Observation[] = [];

  // Labs related to stroke.
  labs: DiagnosticReport[] = [];

  // Diagnostic images related to stroke
  diagnosticImages: ImagingStudy[] = [];

}
