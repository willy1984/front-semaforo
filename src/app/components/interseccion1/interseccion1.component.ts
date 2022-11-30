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
  contadorDeLuz4 = 0;
  contadorDeLuz91 = 0;
  contadorDeLuz22 = 0;

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
      } 
      if (this.tiempo1 === 49 || this.tiempo1 === 112) {
        this.mostrarLuz(1);
      }
      if (this.tiempo1 === 51) {
        this.mostrarLuz(2);
      }
      if (this.tiempo1 < 35 || this.tiempo1 === 119) {
        this.mostrarLuz4(2);
      }
      if (this.tiempo1 === 35) {
        this.mostrarLuz4(1);
      }
      if (this.tiempo1 === 38) {
        this.mostrarLuz4(0);
      }
      if (this.tiempo1 < 38 || this.tiempo1 === 50) {
        this.mostrarLuz91(0);
      }
      if (this.tiempo1 === 38 && this.tiempo1 < 40) {
        this.mostrarLuz91(1);
      }
      if (this.tiempo1 === 41 && this.tiempo1 < 47) {
        this.mostrarLuz91(2);
      }
      if (this.tiempo1 === 47 && this.tiempo1 < 50) {
        this.mostrarLuz91(1);
      }
      if (this.tiempo1 < 30) {
        this.mostrarLuz22(2);
      }
      if (this.tiempo1 === 30 && this.tiempo1 < 116) {
        this.mostrarLuz22(0);
      }
      if (this.tiempo1 === 116) {
        this.mostrarLuz22(2);
      }
    }, 1000); 
  }

  volver() {
    this.route.navigateByUrl(`/home`);
  }

  mostrarLuz(periodo){
    const $lucesDelCirculo = document.querySelectorAll('.luces-circulo');
    $lucesDelCirculo[this.contadorDeLuz].className = 'luces-circulo';
    
    this.contadorDeLuz = periodo;

    if(this.contadorDeLuz > 2) this.contadorDeLuz = 0;

    const luzActual = $lucesDelCirculo[this.contadorDeLuz];
    luzActual.classList.add(luzActual.getAttribute('color'))
}

mostrarLuz4(periodo){
  const $lucesDelCirculo4 = document.querySelectorAll('.luces-circulo4');
  $lucesDelCirculo4[this.contadorDeLuz4].className = 'luces-circulo4';
  
  this.contadorDeLuz4 = periodo;

  if(this.contadorDeLuz4 > 2) this.contadorDeLuz4 = 0;

  const luzActual = $lucesDelCirculo4[this.contadorDeLuz4];
  luzActual.classList.add(luzActual.getAttribute('color'))
}

mostrarLuz91(periodo){
  const $lucesDelCirculo91 = document.querySelectorAll('.luces-circulo91');
  $lucesDelCirculo91[this.contadorDeLuz91].className = 'luces-circulo91';
  
  this.contadorDeLuz91 = periodo;

  if(this.contadorDeLuz91 > 2) this.contadorDeLuz91 = 0;

  const luzActual = $lucesDelCirculo91[this.contadorDeLuz91];
  luzActual.classList.add(luzActual.getAttribute('color'))
}

mostrarLuz22(periodo){
  const $lucesDelCirculo22 = document.querySelectorAll('.luces-circulo22');
  $lucesDelCirculo22[this.contadorDeLuz22].className = 'luces-circulo22';
  
  this.contadorDeLuz22 = periodo;

  if(this.contadorDeLuz22 > 2) this.contadorDeLuz22 = 0;

  const luzActual = $lucesDelCirculo22[this.contadorDeLuz22];
  luzActual.classList.add(luzActual.getAttribute('color'))
}

  ngOnDestroy(): void {
    clearInterval(this.temporizador);    
  }

}
