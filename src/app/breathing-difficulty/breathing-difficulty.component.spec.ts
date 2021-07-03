import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathingDifficultyComponent } from './breathing-difficulty.component';

describe('BreathingDifficultyComponent', () => {
  let component: BreathingDifficultyComponent;
  let fixture: ComponentFixture<BreathingDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreathingDifficultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreathingDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
