import {Component, OnInit} from '@angular/core';
import {FhirhttpService} from './util/fhirhttp.service';
import {Practitioner} from './model/practitioner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  physicianName: string;

  constructor(private fhir: FhirhttpService) {
  }

  ngOnInit(): void {
    this.fhir.getPractitioner()
      .then((data: Practitioner) => {
        this.physicianName = data.prefix + ' ' + data.firstName + ' ' + data.lastName;
      });
  }

}
