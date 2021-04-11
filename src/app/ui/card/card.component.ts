import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Patient} from '../../model/patient';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }

    @Input() patient: Patient;
    @Input() link: string;

  ngOnInit(): void {
  }

  route(link: string): void {
    this.router.navigate(['profile/' + this.patient.id]);
  }
}
