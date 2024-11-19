import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  // Obtener productos
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Agregar producto
  agregarProductos(productos: { nombre: string; descripcion: string; precio: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, productos);
  }

  eliminarProducto(id: number) {
    return this.http.delete(this.apiUrl+'/'+id)
  }
}
