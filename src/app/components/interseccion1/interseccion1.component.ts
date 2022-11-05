import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interseccion1',
  templateUrl: './interseccion1.component.html',
  styleUrls: ['./interseccion1.component.css']
})
export class Interseccion1Component implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  volver() {
    this.route.navigateByUrl(`/home`);
  }

}
