import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-complaints-card',
  templateUrl: './complaints-card.component.html',
  styleUrls: ['./complaints-card.component.scss']
})
export class ComplaintsCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(): void {
    this.router.navigate(['complaint-details']);
  }
}
