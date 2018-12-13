import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
//import {DataService} from "./services/data.service";

import { Micro } from '../models/microcontroller';
import { MicrocontrollerService } from '../services/microcontroller.service';



@Component({
  selector: 'app-state-sensor',
  templateUrl: './state-sensor.component.html',
  styleUrls: ['./state-sensor.component.css'],
  providers: [ MicrocontrollerService ]
})
export class StateSensorComponent implements OnInit {

  public micro: Micro[];
  public microState;

  constructor( private _microcontrollerService : MicrocontrollerService) {

  }

  ngOnInit() {
    this.getmicro();
  }

  getmicro(){
    this.microState = new Array();
    this._microcontrollerService.getMicrocontroladores().subscribe(
      response => {
        if(!response.microcontroladores){

        }else{
          this.micro = response.microcontroladores;
          for(var i =0; i < this.micro.length;i++){
            var ip = this.micro[i].ip;
            this._microcontrollerService.getStateByIP(ip).subscribe(
              response =>{
                var state = false;
                var micros = JSON.parse(response._body);
                if (micros.variables.temperature<=100){
                  state = true;
                }
                this.microState.push({
                  "microIp": micros.name,
                  "codeinve":micros.id,
                  "hardware":micros.hardware,
                  "state": state
                });
                console.log(this.microState);
              },
              error2 => {
                this.microState.push({
                  "microIp": micros.name,
                  "codeinve":micros.id,
                  "hardware":micros.hardware,
                  "state": false
                });
                console.log(this.microState);
              }
            )

          }
        }
      },
      error =>{
        console.log(<any>error);
      });
  }

}
