// importar modulos necesarios para crear modulos

import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import  { FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {InvernaderoRoutingModule} from "./invernadero-routing.module";

// importar componentes
import { CreaInvernaderoComponent } from './components/crea-invernadero/crea-invernadero.component';
import { ListaInvernaderoComponent } from './components/lista-invernadero/lista-invernadero.component';
import { MainInvernaderoComponent } from './components/main-invernadero/main-invernadero.component';
import { VerInvernaderoComponent } from './components/ver-invernadero/ver-invernadero.component';
import { UpdInvernaderoComponent } from './components/upd-invernadero/upd-invernadero.component';
import {ListaPcontrolComponent} from "../parametrosControl/lista-pcontrol/lista-pcontrol.component";
import { CreaPcontrolComponent } from '../parametrosControl/crea-pcontrol/crea-pcontrol.component';
// usar el Decorador ngModule para cargar  los compoentes y la configuracion del module

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    HttpModule,
    InvernaderoRoutingModule,

  ],
  declarations:[
    CreaInvernaderoComponent,
    ListaInvernaderoComponent,
    MainInvernaderoComponent,
    VerInvernaderoComponent,
    UpdInvernaderoComponent,
    ListaPcontrolComponent,
    CreaPcontrolComponent

  ],
  exports:[],
  providers:[]
})

export class InvernaderoModule { }
