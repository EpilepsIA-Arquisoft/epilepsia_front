import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicoModule } from './medico/medico.module';
import { HistorialModule } from './historial/historial.module';
import { EventoModule } from './evento/evento.module';
import { ExamenModule } from './examen/examen.module';
import { PacienteModule } from './paciente/paciente.module';
import { HomeModule } from './home/home.module';
import { LogInModule } from './log-in/log-in.module';

import { LogInRoutes } from './log-in/log-in.routing';
import { MedicoRoutes } from './medico/medico.routing';
import { PacienteRoutes } from './paciente/paciente.routing';
import { HistorialRoutes } from './historial/historial.routing';
import { ExamenRoutes } from './examen/examen.routing';
import { HomeRoutes } from './home/home.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultadoComponent } from './resultado/resultado.component';
import { ResultadoModule } from './resultado/resultado.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [	
    AppComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MedicoModule,
    HistorialModule,
    EventoModule,
    ExamenModule,
    ResultadoModule,
    PacienteModule,
    HomeModule,
    LogInModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    LogInRoutes,
    MedicoRoutes,
    PacienteRoutes,
    HistorialRoutes,
    ExamenRoutes,
    HomeRoutes,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-qox2s5e2aky6aehb.us.auth0.com',
      clientId: 'u8GVzzzDieeY1kKnhCUnVx0IT0xYXOn8',
      authorizationParams: {
        redirect_uri: window.location.origin + '/home',
      },
    }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
