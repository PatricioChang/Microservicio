import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/crear-producto.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @MessagePattern({ cmd: 'crear' })
   crear(@Payload() crearProductoDto: CrearProductoDto) {
    return this.productosService.crear(crearProductoDto);
  }

  @MessagePattern({ cmd: 'obtener' })
   findAll() {
    console.log('Solicitando todos los productos');
    return this.productosService.findAll();
  }

  @MessagePattern({ cmd: 'eliminar' })
  eliminar(@Payload() id: number) {
    console.log(id)
    return this.productosService.eliminar(id)
  }
}
