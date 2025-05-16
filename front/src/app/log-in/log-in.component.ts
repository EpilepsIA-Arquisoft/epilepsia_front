import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MedicoModule } from "../medico/medico.module";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  showModal: boolean = false;
  showMenu: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  login_auth(){
    this.auth.loginWithRedirect({
      authorizationParams: {
        prompt: 'login'  // Esto forzará a mostrar el login aunque haya sesión activa
      }
    });
  }


  @ViewChild('formContainer') formContainer!: ElementRef;
  log_in() {
    const inputs = this.formContainer.nativeElement.querySelectorAll('input');
    const datos: any = {};

    inputs.forEach((input: HTMLInputElement) => {
      datos[input.id] = input.value;
      input.value = "";
    });

    const credentials = { id: datos.username, password: datos.password };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        console.log('Login exitoso');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error de login', error);
        this.showModal = true;
      }
    });
  }

  closeModal() {
    this.showModal = false;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.closeModal();
  }
}
