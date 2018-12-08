import { Component, OnInit } from '@angular/core';
import { Invernadero } from '../../invernadero.model';
import { InvernaderoService } from '../../invernadero.service';
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-ver-invernadero',
  templateUrl: './ver-invernadero.component.html',
  styleUrls: ['./ver-invernadero.component.css'],
  providers: [InvernaderoService]
})
export class VerInvernaderoComponent implements OnInit {
  public title:string;
  public title1:string;
  public inver: Invernadero;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _invernaderoService: InvernaderoService
  ) {
    this.title1="Ver datos del Invernadero";
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

}



