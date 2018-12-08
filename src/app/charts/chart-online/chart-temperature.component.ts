import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';

import { Micro } from '../../models/microcontroller';
import { MicrocontrollerService } from '../../services/microcontroller.service';

@Component({
  selector: 'app-chart-temperature',
  templateUrl: './chart-temperature.component.html',
  styleUrls: ['./chart-temperature.component.css'],
  providers:[MicrocontrollerService]
})
export class ChartTemperatureComponent implements OnInit {
  //interval to update the chart
  private  intervalUpdate: any = null;
  //the chartsJS object
  public chart: any = null;
  private data:any;
  public temperatura;
  public humedad;
  public micro : Micro[];
  public microid:string;


  constructor(private http: HttpClient,
              private _microcontrollerService : MicrocontrollerService
  ) {

  }

  ngOnInit() {
this.getmicro();
    this.chart = new Chart('realtime', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Temperatura',
            fill: false,
            data: [0],
            yAxisID:'A',
            backgroundColor: '#168ede',
            borderColor: '#168ede'
          },
          {
            label: 'Humedad',
            fill: false,
            data: [1],
            yAxisID:'B',
            backgroundColor: '#30ea2a',
            borderColor: '#30ea2a'
          }
        ]
      },
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'white'
          }
        },
        scales: {
          yAxes: [{
            id:'A',
            position:'left',
            ticks: {
              fontColor: "white",
              max:70,
              min:0
            }
          },{
            id:'B',
            type:'linear',
            position:'right',
            ticks: {
              fontColor: "red",
              max:100,
              min:0
            }
            }],
          xAxes: [{
            ticks: {
              fontColor: "white",
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.showData();
    this.intervalUpdate = setInterval(function(){
      this.showData();
    }.bind(this), 500);

  }

  private showData(){
    this.getFromAPI().subscribe(response => {
      this.temperatura= response.variables.temperature;
      this.humedad = response.variables.humidity;

      if(response.connected === true) {
        let chartTime: any = new Date();
        chartTime = chartTime.getHours() + ':' + ((chartTime.getMinutes() < 10) ? '0' + chartTime.getMinutes() : chartTime.getMinutes()) + ':' + ((chartTime.getSeconds() < 10) ? '0' + chartTime.getSeconds() : chartTime.getSeconds());
        if(this.chart.data.labels.length > 15)
        {
          this.chart.data.labels.shift();
          this.chart.data.datasets[0].data.shift();
          this.chart.data.datasets[1].data.shift();
        }
        this.chart.data.labels.push(chartTime);
        this.chart.data.datasets[0].data.push(response.variables.temperature);
        this.chart.data.datasets[1].data.push(response.variables.humidity);
        this.chart.update();
      } else {
        console.error("ERROR: The response had an error, retrying");
      }
    }, error => {
      console.error("ERROR: Unexpected response");
    });
  }

  private ngOnDestroy(){
    clearInterval(this.intervalUpdate);
  }


 private getFromAPI(): Observable<any>{
    return this.http.get(
      'http://'+this.microid+'/',
      { responseType: 'json' }
    );

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
onoff(){

  var device = new Device("192.168.0.103");
  device.pinMode(4, "OUTPUT");
  $('#on').click(function(){
    device.digitalWrite(4,1);
  });
  $('#off').click(function() {
    device.digitalWrite(4, 0);
  });




}



}
