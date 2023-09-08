import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoresReparamosComponent } from './motores-reparamos.component';

describe('MotoresReparamosComponent', () => {
  let component: MotoresReparamosComponent;
  let fixture: ComponentFixture<MotoresReparamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoresReparamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotoresReparamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
