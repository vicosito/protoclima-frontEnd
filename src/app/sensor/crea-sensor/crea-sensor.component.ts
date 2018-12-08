import { Component, OnInit } from '@angular/core';
import { Sensor } from '../../models/sensor';
import { SensorService } from '../../services/sensor.service';
import {ActivatedRoute, Router, Params} from "@angular/router";


@Component({
  selector: 'app-crea-sensor',
  templateUrl: './crea-sensor.component.html',
  styleUrls: ['./crea-sensor.component.css'],
  providers: [ SensorService ]
})
export class CreaSensorComponent implements OnInit {
  title = 'Crea nuevo registro de Sensor';
  public sensor: Sensor;
  public status: string;
  public microid;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _sensorService: SensorService
  ){
    this.sensor = new Sensor( '', '', '', '');
  }

  ngOnInit() {
      this.tomaId();
  }
  tomaId() {
    this._route.params.forEach((params: Params) => {
      this.microid = params['id'];
    });
  }


  onSubmit(registerForm) {
    this.sensor.micontrolador=this.microid;
    this._sensorService.SaveSensor(this.sensor).subscribe(
      response => {
        if (response.sensor) {
          this.status = 'success';
          this.sensor = new Sensor('', '', '', '');
          registerForm.reset();
          window.location.reload();

        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    )

  }
}
