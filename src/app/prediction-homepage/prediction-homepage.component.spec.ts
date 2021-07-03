import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionHomepageComponent } from './prediction-homepage.component';

describe('PredictionHomepageComponent', () => {
  let component: PredictionHomepageComponent;
  let fixture: ComponentFixture<PredictionHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
