import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://34.72.208.141:8080/';  // ← Cambia esto a tu IP:PUERTO real

  constructor(private http: HttpClient) { }

  login(id: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('password', password);

    return this.http.post(`${this.apiUrl}login/`, formData);  // ← OJO: revisa que sea login/ no user/login/
  }

  getCurrentUser(): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.apiUrl}me/`, { headers });
  }

refreshToken() {
  const refresh = localStorage.getItem('refresh_token');
  return this.http.post<any>('http://tu_api/login/refresh/', { refresh });
}

logout() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  console.log('Logged out');
}


  
}