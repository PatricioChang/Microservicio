import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Producto } from '../../productos';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductosModule } from '../productos.module';
import { AgregarProductosComponent } from '../agregar-productos/agregar-productos.component';


@Component({
  selector: 'app-ver-productos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, AgregarProductosComponent],
  templateUrl: './ver-productos.component.html',
  styleUrl: './ver-productos.component.css',
  providers: [ProductosService]
})
export class VerProductosComponent implements OnInit {
  productos: Producto[] = [];
  mostrarFormulario: boolean = false;

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }

  onProductoAgregado(producto: Producto) {
    this.productos.push(producto); 
    this.mostrarFormulario = false; 
  }
  
}