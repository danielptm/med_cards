import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }

    @Input() title: string;
    @Input() link: string;

  ngOnInit(): void {
  }

  route(link: string): void {
    this.router.navigate(['profile']);
  }
}
