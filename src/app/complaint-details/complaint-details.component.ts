import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.scss']
})
export class ComplaintDetailsComponent implements OnInit {

  constructor() { }

  complaints = [1, 2, 3];

  ngOnInit(): void {
  }

}
