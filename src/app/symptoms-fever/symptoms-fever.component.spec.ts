import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsFeverComponent } from './symptoms-fever.component';

describe('SymptomsFeverComponent', () => {
  let component: SymptomsFeverComponent;
  let fixture: ComponentFixture<SymptomsFeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomsFeverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsFeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
