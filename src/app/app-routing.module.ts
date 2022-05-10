import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ExitosComponent } from './pages/exitos/exitos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServicioComponent } from './pages/servicio/servicio.component';


const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'',component:InicioComponent},
  {path:'contactos',component:ContactosComponent},
  {path:'equipo',component:EquipoComponent},
  {path:'exitos',component:ExitosComponent},
  {path:'servicio',component:ServicioComponent},
];
export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
