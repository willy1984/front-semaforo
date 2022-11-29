import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  url = environment.url;

  constructor(private http: HttpClient) { }

  consultarTiempos(): Observable<any> {
    return this.http.get(`${this.url}`)
  }
}
