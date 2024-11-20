import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/auth'

  constructor(
    private http: HttpClient
  ) {}

  public autentificar(correo: string, contrasena: string): Observable<any> {
    const usuario = {correo, contrasena}
    return this.http.post(this.apiUrl+'/login', usuario)
  }
}
