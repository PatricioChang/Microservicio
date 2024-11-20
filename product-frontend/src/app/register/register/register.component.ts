import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    
  }

  dataRegistro = {nombre: '', correo: '', password: ''}

  public onSubmit() {
    
    this.registerService.registrarUsuario(this.dataRegistro).subscribe(respuesta=>{
      if(respuesta){
        console.log('Datos de registro:', this.dataRegistro)
        alert('Registro exitoso. Ahora puedes iniciar sesión.')
        this.router.navigate(['/login'])
      }
    })
  }
}
