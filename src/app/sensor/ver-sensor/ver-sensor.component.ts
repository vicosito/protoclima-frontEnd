import { Component, OnInit } from '@angular/core';
import { Sensor } from '../../models/sensor';
import { SensorService } from '../../services/sensor.service';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-ver-sensor',
  templateUrl: './ver-sensor.component.html',
  styleUrls: ['./ver-sensor.component.css'],
  providers: [ SensorService ]
})
export class VerSensorComponent implements OnInit {
  title = 'Crea nuevo registro de Sensor';
  public sensor: Sensor;
  public status: string;
  public microid;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _sensorService: SensorService
  ) {
    this.sensor = new Sensor( '', '', '', '');
  }

  ngOnInit() {
    //this.getMicro();
  }
 /* getMicro(){
    this._route.params.forEach((params: Params)=> {
      let id = params['id'];
      this._sensorService.getSensor(id).subscribe(
        response =>{
          if(!response.sensor){
            this._router.navigate(['/home']);
          }else{
            this.sensor = response.sensor;
          }
        },
        error =>{
          console.log(<any>error);
        }
      );
    });
  }*/
}
