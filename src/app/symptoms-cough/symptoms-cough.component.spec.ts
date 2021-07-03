import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsCoughComponent } from './symptoms-cough.component';

describe('SymptomsCoughComponent', () => {
  let component: SymptomsCoughComponent;
  let fixture: ComponentFixture<SymptomsCoughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomsCoughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsCoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
