import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdActuadorComponent } from './upd-actuador.component';

describe('UpdActuadorComponent', () => {
  let component: UpdActuadorComponent;
  let fixture: ComponentFixture<UpdActuadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdActuadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdActuadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
