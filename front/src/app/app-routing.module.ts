import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  { path: '', component: LogInComponent, data: { animation: 'LogInPage' }},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'perfil', loadChildren: () => import('./medico/medico.module').then(m => m.MedicoModule)},
  { path: 'pacientes', loadChildren: () => import('./paciente/paciente.module').then(m => m.PacienteModule)},
  { path: 'historiales', loadChildren: () => import('./historial/historial.module').then(m => m.HistorialModule)},
  { path: 'examenes', loadChildren: () => import('./examen/examen.module').then(m => m.ExamenModule)},
  { path: 'resultados', loadChildren: () => import('./resultado/resultado.module').then(m => m.ResultadoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
