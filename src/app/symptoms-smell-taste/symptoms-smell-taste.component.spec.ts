import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsSmellTasteComponent } from './symptoms-smell-taste.component';

describe('SymptomsSmellTasteComponent', () => {
  let component: SymptomsSmellTasteComponent;
  let fixture: ComponentFixture<SymptomsSmellTasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomsSmellTasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsSmellTasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
