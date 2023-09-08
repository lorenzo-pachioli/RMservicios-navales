import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBuquesComponent } from './listado-buques.component';

describe('ListadoBuquesComponent', () => {
  let component: ListadoBuquesComponent;
  let fixture: ComponentFixture<ListadoBuquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoBuquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoBuquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
