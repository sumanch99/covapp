import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestPainComponent } from './chest-pain.component';

describe('ChestPainComponent', () => {
  let component: ChestPainComponent;
  let fixture: ComponentFixture<ChestPainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChestPainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestPainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
