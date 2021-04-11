import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Condition} from '../../model/condition';

@Component({
  selector: 'app-complaints-card',
  templateUrl: './complaints-card.component.html',
  styleUrls: ['./complaints-card.component.scss']
})
export class ComplaintsCardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() condition: Condition;


  ngOnInit(): void {
  }

  route(): void {
    this.router.navigate(['complaint-details']);
  }
}
