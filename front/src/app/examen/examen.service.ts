// examen.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Examen {
  id: string;
  paciente_id: number;
  fecha: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExamenService {
  private apiUrl = 'http://34.59.118.140:8080/examen/';

  constructor(private http: HttpClient) {}

  getExamenes(): Observable<Examen[]> {
    return this.http.get<Examen[]>(this.apiUrl);
  }

  uploadExamen(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}upload/`, formData);
  }
}
