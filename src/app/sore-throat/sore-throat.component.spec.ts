import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoreThroatComponent } from './sore-throat.component';

describe('SoreThroatComponent', () => {
  let component: SoreThroatComponent;
  let fixture: ComponentFixture<SoreThroatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoreThroatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoreThroatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
