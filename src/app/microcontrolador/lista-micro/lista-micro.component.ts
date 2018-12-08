import { Component, OnInit } from '@angular/core';
import { Micro } from '../../models/microcontroller';
import { MicrocontrollerService } from '../../services/microcontroller.service';

@Component({
  selector: 'app-lista-micro',
  templateUrl: './lista-micro.component.html',
  styleUrls: ['./lista-micro.component.css'],
  providers:[MicrocontrollerService]
})
export class ListaMicroComponent implements OnInit {
  public title : string;
  public micro : Micro[];

  constructor(
    private _microcontrollerService : MicrocontrollerService
  ) {
    this.title='Lista de Microcontroladores'
  }

  ngOnInit() {
    this.getMicrocontroladores();

  }
  getMicrocontroladores(){
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
deleteMicrocontrolador(id){
    $('#myModal-'+id).modal('hide');
  this._microcontrollerService.deleteMicrocontrolador(id).subscribe(
    response => {
      if(!response.message){
        alert('Error en el servidor');
      }

        this.getMicrocontroladores();
    },
    error =>{
      alert('Error en el servidor');
    });

}

}
