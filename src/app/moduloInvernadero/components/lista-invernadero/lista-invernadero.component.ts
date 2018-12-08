import { Component, OnInit } from '@angular/core';

import { Invernadero } from '../../invernadero.model';
import { InvernaderoService } from '../../invernadero.service';
@Component({
  selector: 'lista-invernadero',
  templateUrl: './lista-invernadero.component.html',
  styleUrls: ['./lista-invernadero.component.css'],
  providers: [InvernaderoService]
})
export class ListaInvernaderoComponent implements OnInit {
  public title:string;
  public invernadero: Invernadero[];

  constructor(
    private _invernaderoService: InvernaderoService
  ){
      this.title='Listado de invernaderos';
}

  ngOnInit() {
this.getInvernaderos();

  }

  getInvernaderos(){
    this._invernaderoService.getInvernaderos().subscribe(
      response => {
        if(!response.invernadero){

        }else{
          this.invernadero=response.invernadero;
        }
      },
      error =>{
        console.log(<any>error);
      });

  }
  deleteInvernadero(id){
    $('#myModal-'+id).modal('hide');
    this._invernaderoService.deleteInvernadero(id).subscribe(
      response => {
        if(!response.message){
          alert('Error en el servidor');
        }

        this.getInvernaderos();
      },
      error =>{
        alert('Error en el servidor');
      });

  }


}
