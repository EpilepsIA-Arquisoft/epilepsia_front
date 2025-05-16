import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultadoService } from '../resultado.service';
import { Resultado } from '../resultado';
import { NavbarComponent } from '../../recurrent-modules/navbar/navbar.component'; // ✅ Ajusta si la ruta es distinta

@Component({
  selector: 'app-resultado-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ IMPORTA AQUI
  templateUrl: './resultado-list.component.html',
  styleUrls: ['./resultado-list.component.css']
})
export class ResultadoListComponent implements OnInit {
  idResultado: string = '';
  idExamen: string = '';

  resultados: Resultado[] = [];
  resultadosFiltrados: Resultado[] = [];

  constructor(private resultadoService: ResultadoService) {}

  ngOnInit(): void {
    this.resultadoService.obtenerResultados().subscribe((data) => {
      this.resultados = data;
      this.resultadosFiltrados = data;
    });
  }

  lookfor(): void {
    this.resultadosFiltrados = this.resultados.filter((resultado) => {
      const idMatch = this.idResultado ? resultado.id === Number(this.idResultado) : true;
      const examenMatch = this.idExamen ? resultado.examen === Number(this.idExamen) : true;
      return idMatch && examenMatch;
    });
  }

  trackById(index: number, item: Resultado): number {
    return item.id;
  }
}
