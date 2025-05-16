import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://<tu_backend_ip>:<puerto>/';  // Actualiza aquí
  showModal: boolean = false;
  showMenu: boolean = false;
  constructor(private http: HttpClient) { }

  login(id: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('password', password);

    return this.http.post(`${this.apiUrl}user/login/`, formData);
  }

  getCurrentUser(): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}user/me/`, { headers });
  }

  logout(refreshToken: string): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const formData = new FormData();
    formData.append('refresh', refreshToken);

    return this.http.post(`${this.apiUrl}user/logout/`, formData, { headers });
  }
  closeModal() {
    this.showModal = false;
  }
  
  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.closeModal();
  }
}



