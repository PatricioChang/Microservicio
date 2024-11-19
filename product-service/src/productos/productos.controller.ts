import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/crear-producto.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @MessagePattern({ cmd: 'crear' })
   crear(@Payload() crearProductoDto: CrearProductoDto) {
    return this.productosService.crear(crearProductoDto);
  }

  @MessagePattern({ cmd: 'obtener' })
   findAll() {
    return this.productosService.findAll();
  }
}
