import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LogoComponent } from '../recurrent-modules/logo/logo.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MedicoModule } from "../medico/medico.module";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  imports: [
    LogoComponent, 
    RouterModule, 
    FormsModule, 
    CommonModule, 
    MedicoModule, 
    ]
})
export class LogInComponent implements OnInit {
  showModal: boolean = false;
  showMenu: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  log_in_auth(){
    this.router.navigate(['/home']);
  }

  @ViewChild('formContainer') formContainer!: ElementRef;
  log_in() {
    const inputs = this.formContainer.nativeElement.querySelectorAll('input');
    const datos: any = {};

    inputs.forEach((input: HTMLInputElement) => {
      datos[input.id] = input.value;
      input.value = "";
    });

    const usuarioValido = "admin";
    const contraseñaValida = "1234";

    if (datos.username === usuarioValido && datos.password === contraseñaValida) {
      this.router.navigate(['/home']);
    } else {
      this.showModal = true;
    }
  }

  closeModal(){
    this.showModal = false;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu; // Alterna la visibilidad del menú
    this.closeModal();
  }

}
