import { Categoria } from './categoria';

export interface Docente {
  nombre: string;
  dni: string;
  fechaNacimiento: string;
  sueldo: number;
  email: string;
  sexo: string;
  categoria: Categoria;
}
