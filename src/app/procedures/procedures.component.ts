import { Component, OnInit } from '@angular/core';
import {Procedure} from '../model/procedure';
import {PatientService} from '../service/patient.service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {

  procedures: Procedure[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.procedures.push(...this.patientService.patientProcedures);
  }

}
