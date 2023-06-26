import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lista } from './habitacion';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(
    private http: HttpClient
  ) { }

  listarCursos(): Observable<lista[]>{
    return this.http.get<lista[]>("https://6499243279fbe9bcf83eb04d.mockapi.io/api/uwu/Habitaciones");
  }
}
