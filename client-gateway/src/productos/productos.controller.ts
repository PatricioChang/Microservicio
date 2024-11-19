import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('productos')
export class ProductosController {
  constructor(
    @Inject('ProductosService') private readonly productosClient: ClientProxy,
  ) {}
  @Post()
  crearProducto(@Body() newProducto: CreateProductoDto){
    return this.productosClient.send({ cmd: 'crear' },{newProducto})
  }
  @Get()
  obtenerProducto(){
    return this.productosClient.send({ cmd: 'obtener' },{})
  }

}
