import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActuadorComponent } from './lista-actuador.component';

describe('ListaActuadorComponent', () => {
  let component: ListaActuadorComponent;
  let fixture: ComponentFixture<ListaActuadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaActuadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaActuadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
