import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdPcontrolComponent } from './upd-pcontrol.component';

describe('UpdPcontrolComponent', () => {
  let component: UpdPcontrolComponent;
  let fixture: ComponentFixture<UpdPcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdPcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdPcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
