import { Component, OnInit } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    LogoComponent,
    RouterModule
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout_auth() {
    this.auth.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('access_token');
  }
}
