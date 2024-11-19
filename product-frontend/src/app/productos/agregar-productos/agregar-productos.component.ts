import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../../productos';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './agregar-productos.component.html',
  styleUrl: './agregar-productos.component.css',
  providers: [ProductosService]
})
export class AgregarProductosComponent {
  @Output() productoAgregado = new EventEmitter<Producto>();
  @Output() cancelarAgregar = new EventEmitter<void>();

  producto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    id: 0
  };

  constructor(private productosService: ProductosService) {}

  agregarProducto() {
    this.productosService.agregarProductos(this.producto).subscribe((producto) => {
      this.productoAgregado.emit(producto); 
      this.limpiarFormulario();
    });
  }

  cancelar() {
    this.cancelarAgregar.emit(); 
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.producto = { nombre: '', descripcion: '', precio: 0, id: 0 };
  }
}