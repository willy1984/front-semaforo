import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-interseccion1',
  templateUrl: './interseccion1.component.html',
  styleUrls: ['./interseccion1.component.css']
})
export class Interseccion1Component implements OnInit {

  tiempo = 0;
  tiempo1 = 0;
  temporizador: any;
  contadorDeLuz = 0;

  constructor(private route: Router,
              private servicio: ServicioService) { }

  ngOnInit(): void {
    this.tomarTiempo();
    this.servicio.consultarTiempos().subscribe({
      next: (res) => {
        console.log(res)
      }
    });
  }

  tomarTiempo() {
    this.temporizador = setInterval(() => {
      this.tiempo = this.tiempo + 0.83
      this.tiempo1 = this.tiempo1 + 1;
      if (this.tiempo1 === 120) {
        this.tiempo = 0;
        this.tiempo1 = 0;
        this.tomarTiempo;
      }
      if (this.tiempo1 < 49 || this.tiempo1 === 115) {
        this.mostrarLuz(0);
      } else if (this.tiempo1 === 49 || this.tiempo1 === 112) {
        this.mostrarLuz(1);
      } else if (this.tiempo1 === 51) {
        this.mostrarLuz(2);
      }
    }, 1000); 
  }

  volver() {
    this.route.navigateByUrl(`/home`);
  }

  mostrarLuz = (periodo) =>{
    const $lucesDelCirculo = document.querySelectorAll('.luces-circulo');
    $lucesDelCirculo[this.contadorDeLuz].className = 'luces-circulo';
    
    this.contadorDeLuz = periodo;

    if(this.contadorDeLuz > 2) this.contadorDeLuz = 0;

    const luzActual = $lucesDelCirculo[this.contadorDeLuz];
    luzActual.classList.add(luzActual.getAttribute('color'))
}

  ngOnDestroy(): void {
    clearInterval(this.temporizador);    
  }

}
