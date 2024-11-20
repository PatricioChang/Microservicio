import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePedidoDto, FinalizarPedido } from '../dto/pedido.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly _apiUrl = 'http://localhost:3015/pedidos'
  constructor(
    private readonly _http: HttpClient,
  ) { }

  public crearPedido(pedido: CreatePedidoDto): Observable<any> {
    return this._http.post(this._apiUrl+'crear_pedido', pedido);
  }

  public getPedidos(): Observable<any> {
    return this._http.get(this._apiUrl+'find_all');
  }

  public getPedido(id_pedido: number){
    return this._http.get(this._apiUrl+'get_pedido'+id_pedido)
  }

  public finalizarPedido(finalizarPedido: FinalizarPedido){
    return this._http.patch(this._apiUrl+'finalizar_pedido', finalizarPedido)
  }
}
