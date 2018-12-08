import { Component, OnInit } from '@angular/core';
import { Sensor } from '../../models/sensor';
import { SensorService } from '../../services/sensor.service';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-lista-sensor',
  templateUrl: './lista-sensor.component.html',
  styleUrls: ['./lista-sensor.component.css'],
  providers:[SensorService]
})
export class ListaSensorComponent implements OnInit {
  public title :string;
  public sensor: Sensor[];
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _sensorService : SensorService
  ) {
    this.title='Listado de Sensores';
  }

  ngOnInit() {
    this.getSensor();

  }
  getSensor(){
    this._route.params.forEach((params: Params)=> {
      let id = params['id'];
      this._sensorService.getSensor(id).subscribe(
        response =>{
          if(!response.sensor){
            this._router.navigate(['/invernadero']);
          }else{
            this.sensor = response.sensor;
          }
        },
        error =>{
          console.log(<any>error);
        }
      );
    });
  }


}
