import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interseccion1',
  templateUrl: './interseccion1.component.html',
  styleUrls: ['./interseccion1.component.css']
})
export class Interseccion1Component implements OnInit {

  tiempo = 0;
  temporizador: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.tomarTiempo();
  }

  tomarTiempo() {
    this.temporizador = setInterval(() => {
      this.tiempo = this.tiempo + 1
      console.log(this.tiempo)
      if (this.tiempo === 120) {
        this.tiempo = 0;
        this.tomarTiempo;
      }
    }, 1000); 
  }

  volver() {
    this.route.navigateByUrl(`/home`);
  }

  ngOnDestroy(): void {
    clearInterval(this.temporizador);    
  }

}
