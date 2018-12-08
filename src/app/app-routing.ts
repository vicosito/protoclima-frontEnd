import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

// importar componentes
import  { HomeComponent } from './home/home.component';
import  { LoginComponent} from './login/login.component';
import  { ListaInvernaderoComponent } from './moduloInvernadero/components/lista-invernadero/lista-invernadero.component';
import  { CreaInvernaderoComponent } from './moduloInvernadero/components/crea-invernadero/crea-invernadero.component';
import  { UpdInvernaderoComponent } from './moduloInvernadero/components/upd-invernadero/upd-invernadero.component';



import  { ListaMicroComponent } from './microcontrolador/lista-micro/lista-micro.component';
import  { CreaMicroComponent } from './microcontrolador/crea-micro/crea-micro.component';
import  { UpdMicroComponent } from './microcontrolador/upd-micro/upd-micro.component';
import  { VerMicroComponent } from './microcontrolador/ver-micro/ver-micro.component';

import  { ListaSensorComponent } from './sensor/lista-sensor/lista-sensor.component';
import  { CreaSensorComponent } from './sensor/crea-sensor/crea-sensor.component';
import  { UpdSensorComponent } from './sensor/upd-sensor/upd-sensor.component';
import  { ListaActuadorComponent } from './actuador/lista-actuador/lista-actuador.component';
import  { CreaActuadorComponent } from './actuador/crea-actuador/crea-actuador.component';
import  { UpdActuadorComponent } from './actuador/upd-actuador/upd-actuador.component';
import  { ListaPcontrolComponent } from './parametrosControl/lista-pcontrol/lista-pcontrol.component';
import  { CreaPcontrolComponent } from './parametrosControl/crea-pcontrol/crea-pcontrol.component';
import  { UpdPcontrolComponent } from './parametrosControl/upd-pcontrol/upd-pcontrol.component';
import  { RegisterComponent } from './register/register.component';
import  { UserEditComponent } from "./user-edit/user-edit.component";
import { ControlSensorComponent } from "./control-sensor/control-sensor.component";
import { ChartTemperatureComponent } from "./charts/chart-online/chart-temperature.component";
import { ChartBdatosComponent } from "./charts/chart-bdatos/chart-bdatos.component";


const appRoutes: Routes=[
  {path:'', component:LoginComponent}, // home
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},


  {path:'login',component:LoginComponent},
  {path:'mis-datos',component:UserEditComponent},
  {path:'register',component:RegisterComponent},

  {path:'insmicro',component:CreaMicroComponent},
  {path:'getmicro',component:ListaMicroComponent},
  {path:'updmicro/:id',component:UpdMicroComponent},
  {path:'vermicro/:id',component:VerMicroComponent},

  {path:'inssensor/:id',component:CreaSensorComponent},
  {path:'getsensor',component:ListaSensorComponent},

  {path:'sensor',component:ControlSensorComponent},

  {path:'listainve',component:ListaInvernaderoComponent},
  {path:'altainve',component:CreaInvernaderoComponent},
  {path:'updateinve/:id',component:UpdInvernaderoComponent},

  {path:'listamicro',component:ListaMicroComponent},
  {path:'updatemicro/:id',component:UpdMicroComponent},

  {path:'listasensor',component:ListaSensorComponent},
  {path:'altasensor',component:CreaSensorComponent},
  {path:'updatesensor/:id',component:UpdSensorComponent},

  {path:'listaactuador',component:ListaActuadorComponent},
  {path:'altaactuador',component:CreaActuadorComponent},
  {path:'updateactuador/:id',component:UpdActuadorComponent},

  {path:'listapcontrol/:id',component:ListaPcontrolComponent},
  {path:'inspcontrol/:id',component:CreaPcontrolComponent},

  {path:'updatepcontrol/:id',component:UpdPcontrolComponent},

  {path:'chart',component:ChartTemperatureComponent},
  {path:'getdata',component:ChartBdatosComponent},

  {path:'**',component:LoginComponent} // por error
];

export const appRoutingProviders: any [] = [];  // exportar de una variable que es un array de cualquier tipo para que angular pueda cargar el provider de la ruta
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // otra variable llamada ruting le decimos que array de rutas va cargar
