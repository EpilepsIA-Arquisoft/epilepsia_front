import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  showModal: boolean = false;
  showMenu: boolean = false;

  @ViewChild('formContainer') formContainer!: ElementRef;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {}

  log_in_auth() {
    this.router.navigate(['/home']);
  }

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
