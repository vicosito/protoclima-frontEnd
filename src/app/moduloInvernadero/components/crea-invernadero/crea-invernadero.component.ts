import { Component, OnInit } from '@angular/core';
import { Invernadero } from '../../invernadero.model';
import { InvernaderoService } from '../../invernadero.service';

@Component({
  selector   : 'crea-invernadero',
  templateUrl: './crea-invernadero.component.html',
  styleUrls  : ['./crea-invernadero.component.css'],
  providers  : [InvernaderoService]
})
export class CreaInvernaderoComponent implements OnInit {
  title = 'Crea nuevo registro de invernadero';
  public inver : Invernadero;
  public status: string;
  public inverna;


  constructor(
   private  _invernaderoService: InvernaderoService

  ) {

  this.inver = new Invernadero('','','','','',true);
  }

  ngOnInit() {
  }
  onSubmit(registerForm){
    this._invernaderoService.SaveInvernadero(this.inver).subscribe(
      response => {
        if(response.invernadero){
          this.status='success';
          this.inver=new  Invernadero('','','','','',true);
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

}
