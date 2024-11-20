import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  menuOpen = false;

  // Estados posibles para los pedidos
  estados = ['Pendiente', 'Entregado', 'Cancelado'];

  // Mock data for the table
  pedidos = [
    { cliente: 'Juan Pérez', producto: 'Laptop', estado: 'Entregado', fecha: new Date() },
    { cliente: 'María García', producto: 'Smartphone', estado: 'Pendiente', fecha: new Date() },
    { cliente: 'Carlos López', producto: 'Tablet', estado: 'Cancelado', fecha: new Date() },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    console.log('Cerrando sesión...');
    // Lógica para cerrar sesión
  }

  actualizarEstado(pedido: any) {
    console.log(`Estado del pedido actualizado:`, pedido);
    // Aquí puedes llamar a un servicio para guardar el cambio en la base de datos
  }
}
