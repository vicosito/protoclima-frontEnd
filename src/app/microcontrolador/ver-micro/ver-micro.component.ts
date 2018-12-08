import { Component, OnInit } from '@angular/core';
import { Micro } from '../../models/microcontroller';
import { MicrocontrollerService } from '../../services/microcontroller.service';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-ver-micro',
  templateUrl: './ver-micro.component.html',
  styleUrls: ['./ver-micro.component.css'],
  providers:[MicrocontrollerService]
})
export class VerMicroComponent implements OnInit {
  public title:string;
  public title1:string;
  public micro: Micro;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _microcontrollerService : MicrocontrollerService
  ) {
    this.title1 = 'Ver datos del Microcontrolador';
  }

  ngOnInit() {
    this.getMicro();
  }
  getMicro(){
    this._route.params.forEach((params: Params)=> {
      let id = params['id'];
      this._microcontrollerService.getMicrocontrolador(id).subscribe(
        response =>{
          if(!response.microcontrolador){
            this._router.navigate(['/home']);
          }else{
            this.micro = response.microcontrolador;
          }
        },
        error =>{
          console.log(<any>error);
        }
      );
    });
  }
  volver(){
    alert("hola");
    //this._router.navigate(['/listamicro']);
  }
}
