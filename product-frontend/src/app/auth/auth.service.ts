import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3003/usuario'

  constructor(
    //private http: HttpClient
  ) {}

  public autentificar(correo: string, contrasena: string): Observable<boolean>{
    if(correo=='admin'&&contrasena=='admin'){
      return of(true)
    }
    return of(false)
  }
}
