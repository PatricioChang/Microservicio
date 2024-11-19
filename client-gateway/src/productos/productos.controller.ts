import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CrearProductoDto } from './dto/crear-producto.dto';
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
  public async create(@Body() newProducto: CrearProductoDto) {
    try {
      const producto = await firstValueFrom(
        this.productosClient.send({ cmd: 'crear' }, newProducto),
      );
      return producto;
    } catch (error) {
      if (error.code === 'ECONNREFUSED') {
        return this.productosEspejoClient
          .send({ cmd: 'crear' }, newProducto)
          .pipe(
            catchError((err) => {
              throw new RpcException(err);
            }),
          );
      }
      throw new RpcException(error);
    }
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

  @Delete(':id')
  public async eliminar(@Param('id') id: number) {
    try {
      console.log('Eliminando producto con ID:', id);
      return await firstValueFrom(
        this.productosClient.send({ cmd: 'eliminar' }, { id }),
      )
    } catch (error) {
      if (error.code === 'ECONNREFUSED') {
        return this.productosEspejoClient.send({ cmd: 'eliminar' }, { id }).pipe(catchError((err) => {
            throw new RpcException(err)
          }),
        )
      }
      throw new RpcException(error)
    }
  }
}
