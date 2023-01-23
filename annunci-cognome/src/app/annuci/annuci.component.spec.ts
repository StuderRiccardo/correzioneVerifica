import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuciComponent } from './annuci.component';

describe('AnnuciComponent', () => {
  let component: AnnuciComponent;
  let fixture: ComponentFixture<AnnuciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnuciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
