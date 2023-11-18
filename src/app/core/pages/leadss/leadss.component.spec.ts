import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadssComponent } from './leadss.component';

describe('LeadssComponent', () => {
  let component: LeadssComponent;
  let fixture: ComponentFixture<LeadssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
