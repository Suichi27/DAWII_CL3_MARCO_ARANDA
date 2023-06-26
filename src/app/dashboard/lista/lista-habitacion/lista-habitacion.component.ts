import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { lista } from '../habitacion';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-lista-habitacion',
  templateUrl: './lista-habitacion.component.html',
  styleUrls: ['./lista-habitacion.component.scss']
})
export class ListaHabitacionComponent implements OnInit {

  habitaciones: lista[] =[];
  displayedColumns: string[] = ['numero','tipo','precio','estado','id'];
  constructor(
    private listaService: ListaService,
  ){

  }
  ngOnInit(): void {
    this.listaService.listarCursos()
    .subscribe((data) => {
      this.habitaciones = data
    });
  }



}
