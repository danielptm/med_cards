import {Injectable} from '@angular/core';
import {Condition} from '../model/condition';
import {Observation} from '../model/observation';
import {MedicationRequest} from '../model/medication-request';
import {Procedure} from '../model/procedure';
import {Patient} from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientParserService {


  constructor() { }


  getPatients(jsonPayload): Patient[] {
    const start = jsonPayload;
    const patients: Patient[] = [];
    for (const i of start.entry) {
      const p = new Patient();
      p.id = i.resource.id;
      p.firstName = i.resource.name[0].given[0];
      p.lastName = i.resource.name[0].family;
      p.gender = i.resource.gender;
      p.birthDate = i.resource.birthDate;
      patients.push(p);
    }
    return patients;
  }

  getObservations(jsonPayload: any): any {
    const start = jsonPayload;
    const result: Observation[] = [];
    for (const i of start.entry) {
      const o = new Observation();
      o.id = i.resource.id;
      o.text = i.resource.code.text;
      o.date = i.resource.issued;
      o.quantitativeValue = i.resource.valueQuantity && i.resource.valueQuantity.value ? i.resource.valueQuantity.value : undefined;
      o.unit = i.resource.valueQuantity && i.resource.valueQuantity.unit ? i.resource.valueQuantity.unit : undefined;
      result.push(o);
    }
    return result;
  }

  getConditions(jsonPayload: any): any {
    const start = jsonPayload;
    const result: Condition[] = [];
    for (const i of start.entry) {
      const c = new Condition();
      c.id = i.resource.id;
      c.text = i.resource.code.text;
      c.abatementDateTime = i.resource.abatementDateTime;
      result.push(c);
    }
    return result;
  }

  getMedicationRequests(jsonPayload: any): any {
    const start = jsonPayload;
    const result: MedicationRequest[] = [];
    for (const i of start.entry) {
      const m = new MedicationRequest();
      m.text = i.resource.medicationCodeableConcept.text;
      m.authoredDate = i.resource.authoredOn;
      m.status = i.resource.status;
      result.push(m);
    }

    return result;
  }

  getProcedures(jsonPayload: any): any {
    const start = jsonPayload;
    const result: Procedure[] = [];
    for (const i of start.entry) {
      const p = new Procedure();
      p.id = i.resource.id;
      p.text = i.resource.code && i.resource.code.text ? i.resource.code.text : undefined;
      p.dateStart = i.resource.performedPeriod && i.resource.performedPeriod.start ? i.resource.performedPeriod.start : undefined;
      p.dateEnd = i.resource.performedPeriod && i.resource.performedPeriod.end ? i.resource.performedPeriod.end : undefined;
      result.push(p);
    }
    return result;
  }


}
