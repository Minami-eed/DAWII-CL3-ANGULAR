import { Component } from '@angular/core';
import { DocentesService } from '../../services/docentes.service';
import { Docente } from '../../interfaces/docente';
import { Categoria } from '../../interfaces/categoria';

let categoria: Categoria = {
  idcategoria: 1,
  nombre: 'Matemáticas',
  docentes: [],
};

@Component({
  selector: 'app-appapi',
  standalone: true,
  imports: [],
  templateUrl: './appapi.component.html',
  styleUrl: './appapi.component.css',
})
export class AppapiComponent {
  constructor(private docentesService: DocentesService) {}

  getAllDocentesSpring() {
    this.docentesService.getAllDocentes().subscribe({
      next: (response) => console.log(response),
    });
  }

  docenteSpring: Docente = {
    nombre: 'Raul',
    dni: '12345678',
    fechaNacimiento: '01/01/1998',
    sueldo: 2500,
    email: 'Raul@gmail',
    sexo: 'M',
    categoria: new Categoria(1, 'Matemáticas', []),
  };

  createDocenteSpring() {
    this.docentesService.createDocente().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
