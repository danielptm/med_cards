import { Component, OnInit } from '@angular/core';
import {PatientService} from '../service/patient.service';
import {Condition} from '../model/condition';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  conditions: Condition[] = [];

  constructor(private patientService: PatientService) { }


  ngOnInit(): void {
    this.conditions.push(...this.patientService.getConditions());
  }

}
