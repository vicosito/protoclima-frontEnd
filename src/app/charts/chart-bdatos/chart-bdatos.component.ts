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
  //the chartsJS object
  public chart: any = null;
  public chart2: any = null;
  private temperatura;
  private fecha;
  private humedad;
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


  }

  getData(){
    this.temperatura=new Array();
    this.fecha= new Array();
    this.humedad= new Array();
    this.humedad=[];
    this.temperatura=[];
    this.fecha=[];
    var reporteData ={"fechaini": this.fechaini, "fechafin":this.fechafin};
    this._DataService.getDatas2(reporteData).subscribe(
      response => {
        console.log(response.datos);
        if(!response.datos){

        }else{
          for (let i in response.datos) {
            this.temperatura.push(response.datos[i].temperature);
            this.humedad.push(response.datos[i].humidity);
            this.fecha.push((new Date(response.datos[i].time)).toDateString());
          }
          //this.graficar();
          //this.Charthumedad;
          this.chart.update();
          this.chart2.update();

        }
      },
      error =>{
        console.log(<any>error);
      });

  }

  private graficar(){
    const chartdata = {
      labels: this.fecha,
      datasets:[
        {
          label:'Temperatura',
          borderColor: "#c45850",
          pointRadius: 1,
          fill: true,
          borderWidth: 2,
          data: this.temperatura
        }
      ]

    };
    this.chart = new Chart('temperatura',{
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
            ticks:{fontColor:'white'},
            max:80,
            min:0
          }],
            xAxes:[{
            ticks:{fontColor:'white', beginAtZero:true}

          }]
        }

      }
    });

  }
  private Charthumedad(){
    const chartdata2 = {
      labels: this.fecha,
      datasets:[
        {
          label:'Humedad',
          borderColor:"#3cba9f",
          fill: false,
          borderWidth: 2,
          data: this.humedad
        }
      ]

    };
    this.chart2 = new Chart('humedad',{
      type:'line',
      data: chartdata2,
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
this.getData();
this.graficar();
this.Charthumedad();
}
}

