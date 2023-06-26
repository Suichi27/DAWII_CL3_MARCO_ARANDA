import { Component } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.scss']
})
export class PromedioComponent {

  promedio = {
    numero1: null,
    numero2 : null,
    numero3 : null,
    prm:0
  }
resultado=""

  calcular(){
    
    this.promedio.prm= ((Number(this.promedio.numero1) + Number(this.promedio.numero2) + Number(this.promedio.numero3)) / 3)
    this.resultado = "Su promedio es  :" + this.promedio.prm

  }

}
