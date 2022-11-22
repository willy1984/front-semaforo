import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interseccion2',
  templateUrl: './interseccion2.component.html',
  styleUrls: ['./interseccion2.component.css']
})
export class Interseccion2Component implements OnInit {

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
      if (this.tiempo === 90) {
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
