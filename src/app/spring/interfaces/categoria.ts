import { Docente } from "./docente";

export interface Categoria {
    idcategoria: number;
    nombre: string;
    docentes: Docente[];
}
