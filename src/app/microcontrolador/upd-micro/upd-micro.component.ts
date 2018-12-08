import { Component, OnInit } from '@angular/core';
import { Micro } from '../../models/microcontroller';
import { MicrocontrollerService } from '../../services/microcontroller.service';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-upd-micro',
  templateUrl: '../crea-micro/crea-micro.component.html',
  styleUrls: ['./upd-micro.component.css'],
  providers:[MicrocontrollerService]
})
export class UpdMicroComponent implements OnInit {
  public title:string;
  public title1:string;
  public micro: Micro;
  public identity;
  public token;
  public status: string;
  public edit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _microcontrollerService : MicrocontrollerService
  ) {
    this.title = 'Editar';
    this.title1='Editar datos del Microcontrolador'
    this.edit=true;

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
  onSubmit(registerForm){
  var id = this.micro._id;
    this._microcontrollerService.editMicrocontrolador(id, this.micro).subscribe(
      response => {
        if(!response.micro){
          this.status='error';
        }else{
          this.status='success';
         this.micro=response.micro;

        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }
}
