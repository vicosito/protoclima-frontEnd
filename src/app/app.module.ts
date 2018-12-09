import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import  { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {routing, appRoutingProviders} from './app-routing';
import { HttpClientModule, HttpClient } from '@angular/common/http'; //para la grafica

// importar nuestros modulos
import { InvernaderoModule } from './moduloInvernadero/invernadero.module';

//componentes

import { AppComponent } from './app.component';
import { UpdSensorComponent } from './sensor/upd-sensor/upd-sensor.component';
import { UpdPcontrolComponent } from './parametrosControl/upd-pcontrol/upd-pcontrol.component';
import { UpdMicroComponent } from './microcontrolador/upd-micro/upd-micro.component';
import { UpdInvernaderoComponent } from './moduloInvernadero/components/upd-invernadero/upd-invernadero.component';
import { UpdActuadorComponent } from './actuador/upd-actuador/upd-actuador.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CreaActuadorComponent } from './actuador/crea-actuador/crea-actuador.component';
import { CreaMicroComponent } from './microcontrolador/crea-micro/crea-micro.component';
//import { CreaPcontrolComponent } from './parametrosControl/crea-pcontrol/crea-pcontrol.component';
import { CreaSensorComponent } from './sensor/crea-sensor/crea-sensor.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListaActuadorComponent } from './actuador/lista-actuador/lista-actuador.component';
import { ListaMicroComponent } from './microcontrolador/lista-micro/lista-micro.component';
//import { ListaPcontrolComponent } from './parametrosControl/lista-pcontrol/lista-pcontrol.component';
import { ListaSensorComponent } from './sensor/lista-sensor/lista-sensor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ControlSensorComponent } from './control-sensor/control-sensor.component';
//import { MenuSensorComponent } from './sensor/menu-sensor/menu-sensor.component';
import { ChartTemperatureComponent } from './charts/chart-online/chart-temperature.component';
import { ChartGaugeComponent } from './charts/chart-gauge/chart-gauge.component';
import { VerMicroComponent } from './microcontrolador/ver-micro/ver-micro.component';
import { VerSensorComponent } from './sensor/ver-sensor/ver-sensor.component';
import { ChartBdatosComponent } from './charts/chart-bdatos/chart-bdatos.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [     // aqui se cargan los nuevos pipes y nuevos componentes
    AppComponent,
    //BsDatepickerModule,
    UpdSensorComponent,
    UpdPcontrolComponent,
    UpdMicroComponent,
    UpdActuadorComponent,
    SideMenuComponent,
    CreaActuadorComponent,
    CreaMicroComponent,
    //CreaPcontrolComponent,
    CreaSensorComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ListaActuadorComponent,
    ListaMicroComponent,
  //  ListaPcontrolComponent,
    ListaSensorComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    ControlSensorComponent,
  //  MenuSensorComponent,
    ChartTemperatureComponent,
    ChartGaugeComponent,
    VerMicroComponent,
    VerSensorComponent,
    ChartBdatosComponent
  ],
  imports: [   // aqui se cargan los modulos internos o los creados por nosotros
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    InvernaderoModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()  //para la grafica
  ],
  providers: [appRoutingProviders],  // aqui se cargan servicios
  bootstrap: [AppComponent]          // aqui se indica el componente pricipal de la aplicacion
})
export class AppModule { }
