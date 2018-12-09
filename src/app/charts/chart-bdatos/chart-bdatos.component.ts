import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';
import {DataService} from "../../services/data.service";

import { Micro } from '../../models/microcontroller';
import { MicrocontrollerService } from '../../services/microcontroller.service';

import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';

defineLocale('es', esLocale);

@Component({
  selector: 'app-chart-bdatos',
  templateUrl: './chart-bdatos.component.html',
  styleUrls: ['./chart-bdatos.component.css'],
  providers:[DataService, MicrocontrollerService]
})
export class ChartBdatosComponent implements OnInit {
  //interval to update the chart
  private  intervalUpdate: any = null;
  //the chartsJS object
  public chart: any = null;
  private data:any;
  private temperatura;
  private fecha;
private  fechaini: Date;
private fechafin: Date;

  public micro: Micro[];
  public microid:string;

  constructor(http: HttpClient,
    private _DataService: DataService,
    private _BsLocaleService : BsLocaleService,
  private _microcontrollerService : MicrocontrollerService
  ) {

  }

  ngOnInit() {
this._BsLocaleService.use('es');
this.getmicro();
//this.getData();
//this.graficar();
    this.chart.update();

  }

  getData(){
    this.temperatura=new Array();
    this.fecha= new Array();
    var reporteData ={"fechaini": this.fechaini, "fechafin":this.fechafin};
    this._DataService.getDatas2(reporteData).subscribe(
      response => {
        console.log(response.datos);
        if(!response.datos){

        }else{
          for (let i in response.datos) {
            this.temperatura.push(response.datos[i].temperature);
            this.fecha.push(response.datos[i].time);
          }
          this.graficar();
        }
      },
      error =>{
        console.log(<any>error);
      });

  }

  private graficar(){
    var realtime=document.getElementById('realtime');
    var ctx=realtime.getContext("2d");
    var degrade = ctx.createLinearGradient(100, 0, 10, 0);
    degrade.addColorStop(0, "#f49080");
    degrade.addColorStop(1, "#80b6f4");
    const chartdata = {
      labels: this.fecha,
      datasets:[
        {
          label:'Temperatura',
          borderColor: degrade,
          pointBorderColor: degrade,
          pointBackgroundColor: degrade,
          pointHoverBackgroundColor: degrade,
          pointHoverBorderColor: degrade,
          pointBorderWidth: 10,
          pointHoverRadius: 10,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          fill: false,
          borderWidth: 4,
          data: this.temperatura
        }
      ]

    };
    this.chart = new Chart('realtime',{
      type:'line',
      data: chartdata,
      options:{
        tooltips:{enabled:false},
        legend:{
          display:true,
          position:'bottom',
          labels:{ fontColor:'white'}
        },
        scales:{
          yAxes:[{
            ticks:{fontColor:'white'}
          }],
            xAxes:[{
            ticks:{fontColor:'white', beginAtZero:true}

          }]
        }

      }
    });

  }

  getmicro(){
    this._microcontrollerService.getMicrocontroladores().subscribe(
      response => {
        if(!response.microcontroladores){

        }else{
          this.micro = response.microcontroladores;
        }
      },
      error =>{
        console.log(<any>error);
      });
  }
selectmicro(){
  this.microid=this.microid;
}
traerDatos(){
console.log(this.fechafin,this.fechafin,this.microid);
this.getData();
}
}

