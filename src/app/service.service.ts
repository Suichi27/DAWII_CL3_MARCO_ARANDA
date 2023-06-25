import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { habitaciones } from './model/habitaciones';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private Http:HttpClient) { }

  url="http://localhost:8080/uwu";

getHabitaciones(){
  return this.Http.get<habitaciones[]>(this.url);
}

}
