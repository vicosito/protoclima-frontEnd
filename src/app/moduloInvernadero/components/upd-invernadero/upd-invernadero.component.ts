import { Component, OnInit } from '@angular/core';
import { Invernadero } from '../../invernadero.model';
import { InvernaderoService } from '../../invernadero.service';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'upd-invernadero',
  templateUrl: '../crea-invernadero/crea-invernadero.component.html',
  styleUrls: ['./upd-invernadero.component.css'],
  providers: [InvernaderoService]
})
export class UpdInvernaderoComponent implements OnInit {
  public title:string;
  public title1:string;
  public inver: Invernadero;
  public identity;
  public token;
  public status: string;
  public edit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _invernaderoService: InvernaderoService
  ) {
    this.title = 'Editar';
    this.title1='Editar datos del Invernadero'
    this.edit=true;
  }

  ngOnInit() {
    this.getInvernadero();
  }
  getInvernadero(){
    this._route.params.forEach((params: Params)=> {
      let id = params['id'];
      this._invernaderoService.getInvernadero(id).subscribe(
        response =>{
          if(!response.invernadero){
            this._router.navigate(['/home']);
          }else{
            this.inver = response.invernadero;
          }
        },
        error =>{
          console.log(<any>error);
        }
      );
    });
  }
  onSubmit(registerForm){
    var id = this.inver._id;
    this._invernaderoService.editInvernadero(id, this.inver).subscribe(
      response => {
        if(!response.invernadero){
          this.status = 'error';
        }else {
          this.status = 'success';
          this.inver = response.invernadero;
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }
}
