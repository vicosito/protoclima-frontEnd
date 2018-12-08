import { Component, OnInit, } from '@angular/core';
import { Micro } from '../../models/microcontroller';
import { Invernadero } from '../../moduloInvernadero/invernadero.model';
import { MicrocontrollerService } from '../../services/microcontroller.service';
import { InvernaderoService } from '../../moduloInvernadero/invernadero.service';

@Component({
  selector: 'app-crea-micro',
  templateUrl: './crea-micro.component.html',
  styleUrls: ['./crea-micro.component.css'],
  providers:[MicrocontrollerService, InvernaderoService]
})
export class CreaMicroComponent implements OnInit {
  title1 = 'Crea nuevo registro de Microcontrolador';
  public title='Guardar el nuevo registro'
  public micro: Micro;
  public inver : Invernadero;
  public status: string;
  public invernaderoid: string;


  constructor(
    private _microcontrollerService : MicrocontrollerService,
    private _invernaderoService : InvernaderoService
  ) {
  this.micro = new Micro('','','','','','');

}

  ngOnInit() {
    this.getInvernaderos();
  }

  onSubmit(registerForm){
    this.micro.invernaderoid=this.invernaderoid;
    this._microcontrollerService.SaveMicrocontrolador(this.micro).subscribe(
      response => {
        if(response.microcon){
          this.status='success';
          this.micro= new Micro('','','','','','');
          registerForm.reset();

        }else {
          this.status='error';
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }
  getInvernaderos(){
    this._invernaderoService.getInvernaderos().subscribe(
      response => {
        if(!response.invernadero){

        }else{
          this.inver=response.invernadero;
        }
      },
      error =>{
        console.log(<any>error);
      });

  }
selectinve(){
  this.invernaderoid = this.invernaderoid;
}
}
