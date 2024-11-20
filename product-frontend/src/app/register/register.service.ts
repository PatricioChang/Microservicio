import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000/usuario'

  constructor(
    private http: HttpClient
  ) {}

  public registrarUsuario(usuario: {nombre: string; correo: string; password: string}): Observable<any> {
    return this.http.post(this.apiUrl, usuario)
  }
}
