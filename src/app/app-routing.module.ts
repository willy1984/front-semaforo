import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Interseccion1Component } from './components/interseccion1/interseccion1.component';
import { Interseccion2Component } from './components/interseccion2/interseccion2.component';
import { Interseccion3Component } from './components/interseccion3/interseccion3.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'interseccion1', component: Interseccion1Component },
  { path: 'interseccion2', component: Interseccion2Component },
  { path: 'interseccion3', component: Interseccion3Component },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
