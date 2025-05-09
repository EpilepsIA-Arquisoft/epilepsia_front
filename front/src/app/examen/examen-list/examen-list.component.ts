import { Component, OnInit } from '@angular/core';
import { ExamenService, Examen } from '../examen.service';  // Asegúrate de que el path sea correcto
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ExamenListComponent implements OnInit {
  examenes: Examen[] = [];
  mostrarModal = false;

  constructor(private examenService: ExamenService) {}

  ngOnInit(): void {
    this.examenService.getExamenes().subscribe((data) => {
      this.examenes = data;
    });
  }

  lookfor(): void {
    // Aquí podrías implementar el filtrado si lo deseas.
  }
}
