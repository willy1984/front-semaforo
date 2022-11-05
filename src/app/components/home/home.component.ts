import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarMenu(item: number): void {
    switch (item) {
      case 1:                
      this.router.navigateByUrl('/interseccion1');
        break;
      case 2:                
      this.router.navigateByUrl('/interseccion2');
        break;
      case 3:                
      this.router.navigateByUrl('/interseccion3');
        break;
    }
  } 

}
