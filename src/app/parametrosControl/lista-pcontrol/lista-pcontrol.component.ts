import { Component, OnInit } from '@angular/core';
import { PControl } from '../../models/pcontrol';
import { PcontrolService } from '../../services/pcontrol.service';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-lista-pcontrol',
  templateUrl: './lista-pcontrol.component.html',
  styleUrls: ['./lista-pcontrol.component.css'],
  providers: [PcontrolService]
})
export class ListaPcontrolComponent implements OnInit {
  public title: string;
  public pcontrol: PControl[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _PcontrolService: PcontrolService)
  {this.title='Parametros de control del invernadero:';
  }

  ngOnInit(){
    this.getPcontrol();
  }

  getPcontrols(){
    this._PcontrolService.getPcontrols().subscribe(
      response => {
        if(!response.pcontrols){

        }else{
          this.pcontrol = response.pcontrols;
        }
      },
      error =>{
        console.log(<any>error);
      });

  }

  getPcontrol(){
    this._route.params.forEach((params: Params)=> {
      let id = params['id'];
      this._PcontrolService.getPcontrol(id).subscribe(
        response =>{
          if(!response.pcontrol){
            this._router.navigate(['/invernadero']);
          }else{
            this.pcontrol = response.pcontrol;
          }
        },
        error =>{
          console.log(<any>error);
        }
      );
    });
  }
}
