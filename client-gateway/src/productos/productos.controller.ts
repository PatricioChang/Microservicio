import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { catchError } from 'rxjs';

@Controller('productos')
export class ProductosController {
  constructor(
    @Inject('ProductosService') private readonly productosClient: ClientProxy,
    @Inject('ProductosEspejoService') private readonly productosEspejoClient: ClientProxy,
    
  ) {}
  @Post()
  crearProducto(@Body() newProducto: CreateProductoDto){
    return this.productosClient.send({ cmd: 'crear' },{newProducto})
  }

  @Get()
  public async findAll() {
    try {
      const criminals = await firstValueFrom(
        this.productosClient.send({ cmd: 'obtener' }, {}),
      );
      return criminals;
    } catch (error) {
      if (error.code === 'ECONNREFUSED') {
        return this.productosEspejoClient
          .send({ cmd: 'obtener' }, {})
          .pipe(
            catchError((err) => {
              throw new RpcException(err);
            }),
          );
      }

      throw new RpcException(error);
    }
  }
}
