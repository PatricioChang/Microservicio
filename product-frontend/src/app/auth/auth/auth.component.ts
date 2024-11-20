import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    
  }

  public datosLogin = { correo: '', contrasena: '' }

  public onSubmit() {
    this.authService.autentificar(this.datosLogin.correo, this.datosLogin.contrasena).subscribe(respuesta=>{
      if(respuesta){
        alert('Inicio de sesión exitoso')
      this.router.navigate(['/verProductos'])
      }else{
        alert('Correo o contraseña incorrectos')
      }
    })
  }
}
