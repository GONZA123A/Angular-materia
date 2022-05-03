import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ExitosComponent } from './pages/exitos/exitos.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ComponentModule } from './component/component.module';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    EquipoComponent,
    ContactosComponent,
    ExitosComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
