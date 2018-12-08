import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdSensorComponent } from './upd-sensor.component';

describe('UpdSensorComponent', () => {
  let component: UpdSensorComponent;
  let fixture: ComponentFixture<UpdSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
