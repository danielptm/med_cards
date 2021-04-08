import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsCardComponent } from './complaints-card.component';

describe('ComplaintsCardComponent', () => {
  let component: ComplaintsCardComponent;
  let fixture: ComponentFixture<ComplaintsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
