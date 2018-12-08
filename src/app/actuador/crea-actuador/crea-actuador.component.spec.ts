import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaActuadorComponent } from './crea-actuador.component';

describe('CreaActuadorComponent', () => {
  let component: CreaActuadorComponent;
  let fixture: ComponentFixture<CreaActuadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaActuadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaActuadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
