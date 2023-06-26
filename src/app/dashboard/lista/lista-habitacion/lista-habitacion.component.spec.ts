import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHabitacionComponent } from './lista-habitacion.component';

describe('ListaHabitacionComponent', () => {
  let component: ListaHabitacionComponent;
  let fixture: ComponentFixture<ListaHabitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaHabitacionComponent]
    });
    fixture = TestBed.createComponent(ListaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
