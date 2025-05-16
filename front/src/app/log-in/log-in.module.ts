import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LogInComponent } from './log-in.component';
import { LogInRoutes } from './log-in.routing';
import { LogoModule } from '../recurrent-modules/logo/logo.module';



@NgModule({
  declarations: [],  // ✅ Aquí va el componente
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LogInComponent,
    LogoModule,
    LogInRoutes,
  ],
  exports: [LogInComponent]  // ✅ Solo si lo necesitas fuera
})
export class LogInModule { }
