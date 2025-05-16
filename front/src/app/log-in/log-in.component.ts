import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../service/auth.service';
import { LogoComponent } from '../recurrent-modules/logo/logo.component';
import { SignUpComponent } from '../medico/sign-up/sign-up.component';


@Component({
  selector: 'app-log-in',
  standalone: true,  // ✅ Esto hace que se importe, no se declare en módulo
  imports: [
    CommonModule,
  FormsModule,
  LogoComponent,
  SignUpComponent,
  NgClass // <- si usas <app-sign-up>
  ],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  showModal: boolean = false;
  showMenu: boolean = false;

  @ViewChild('formContainer') formContainer!: ElementRef;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  log_in() {
  const inputs = this.formContainer.nativeElement.querySelectorAll('input');
  const datos: any = {};

  inputs.forEach((input: HTMLInputElement) => {
    datos[input.id] = input.value;
  });

  const credentials = { id: datos.username, password: datos.password };

  this.authService.login(credentials.id, credentials.password).subscribe({
    next: (response) => {
  console.log('✅ LOGIN OK', response);

  localStorage.setItem('access_token', response.access);
  localStorage.setItem('refresh_token', response.refresh);
  console.log('Login exitoso');
  this.router.navigate(['/home']);
}
,
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
