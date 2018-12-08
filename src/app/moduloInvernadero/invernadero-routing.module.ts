import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

//Componentes
import { MainInvernaderoComponent} from "./components/main-invernadero/main-invernadero.component";
import { CreaInvernaderoComponent } from './components/crea-invernadero/crea-invernadero.component';
import { ListaInvernaderoComponent } from './components/lista-invernadero/lista-invernadero.component';
import { VerInvernaderoComponent } from './components/ver-invernadero/ver-invernadero.component';
import { UpdInvernaderoComponent } from './components/upd-invernadero/upd-invernadero.component';

const invernaderoRoutes: Routes =[
  {
    path:'invernadero',
    component: MainInvernaderoComponent,
    children:[
      {path:'', redirectTo:'listar', pathMatch:'full'},
      {path:'crear', component: CreaInvernaderoComponent},
      {path:'listar', component: ListaInvernaderoComponent},
      {path:'ver/:id', component: VerInvernaderoComponent},
      {path:'edit/:id', component: UpdInvernaderoComponent}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(invernaderoRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export  class  InvernaderoRoutingModule {}
