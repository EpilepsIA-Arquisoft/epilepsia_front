import { Component, OnInit } from '@angular/core';
import { NavbarModule } from '../recurrent-modules/navbar/navbar.module';
import { CarouselComponent } from './carousel/carousel.component';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NavbarModule,
    CarouselComponent
  ]
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.handleRedirectCallback().subscribe({
      next: () => {
        // Redirigir a la página principal o dashboard después de autenticarse correctamente
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error en autenticación:', err);
      },
    });
  }

}
