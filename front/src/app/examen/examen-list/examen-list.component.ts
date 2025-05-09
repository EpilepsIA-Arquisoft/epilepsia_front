import { Component, OnInit } from '@angular/core';
import { ExamenService, Examen } from '../examen.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class ExamenListComponent implements OnInit {
  examenes: Examen[] = [];
  mostrarModal = false;

  constructor(
    private examenService: ExamenService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.examenService.getExamenes().subscribe((data) => {
      this.examenes = data;
    });
  }

  lookfor(): void {
    // Aquí puedes implementar filtrado si se necesita.
  }

  mandarASolicitud(examenId: string): void {
    const body = {
      estado: 'ya casi',
      examen_id: examenId
    };

    this.http.post('http://34.59.118.140:8080/solicitud/', body).subscribe({
      next: (response) => {
        console.log('Solicitud enviada correctamente:', response);
        alert('✅ Examen enviado a análisis');
      },
      error: (error) => {
        console.error('Error al enviar solicitud:', error);
        alert('❌ Hubo un error al enviar la solicitud');
      }
    });
  }
}
