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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultadoModule } from './resultado/resultado.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthInterceptor } from './service/AuthInterceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
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
    BrowserAnimationsModule,
    AuthModule.forRoot({
      domain: 'dev-qox2s5e2aky6aehb.us.auth0.com',
      clientId: 'u8GVzzzDieeY1kKnhCUnVx0IT0xYXOn8',
      authorizationParams: {
        redirect_uri: window.location.origin + '/home',
      },
    }),
  ],
  providers: [provideClientHydration(),  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
