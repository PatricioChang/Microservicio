import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  dataRegistro = {correo: '', contrasena: ''}

  public onSubmit() {
    console.log('Datos de registro:', this.dataRegistro)
    alert('Registro exitoso. Ahora puedes iniciar sesión.')
    this.router.navigate(['/login'])
  }
}
