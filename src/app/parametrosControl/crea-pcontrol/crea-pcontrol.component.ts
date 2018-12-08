import { Component, OnInit } from '@angular/core';
import { PControl } from '../../models/pcontrol';
import { PcontrolService } from '../../services/pcontrol.service';
import {ActivatedRoute, Router, Params} from "@angular/router";


@Component({
  selector: 'app-crea-pcontrol',
  templateUrl: './crea-pcontrol.component.html',
  styleUrls: ['./crea-pcontrol.component.css'],
  providers  : [PcontrolService]
})
export class CreaPcontrolComponent implements OnInit {
  title1 = 'Crea nuevo registro de Microcontrolador';
  public title='Guardar el nuevo registro'
  public pcontrol: PControl;
  public status: string;
  public invernaderoid;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _PcontrolService : PcontrolService
  ) {
    this.pcontrol = new PControl('','','','','','','','');
  }

  ngOnInit() {
    this.tomaId();
  }

  tomaId() {
    this._route.params.forEach((params: Params) => {
      this.invernaderoid = params['id'];
    });
  }
  onSubmit(registerForm){
    this.pcontrol.invernaderoid=this.invernaderoid;
    this._PcontrolService.SavePcontrol(this.pcontrol).subscribe(
      response => {
        if(response.pcontrol){
          this.status='success';
          this.pcontrol=new  PControl('','','','','','','','');
          registerForm.reset();
          window.location.reload();

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
