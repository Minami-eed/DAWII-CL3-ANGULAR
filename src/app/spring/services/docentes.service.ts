import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docente } from '../interfaces/docente';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllDocentes(){
    return this.http.get('http://localhost:8080/api/v1/docentes')
  }

  createDocente(prod: Docente){
    return this.http.post('http://localhost:8080/api/v1/docentes', prod)
  }

}
