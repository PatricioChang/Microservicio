import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClient, Productos } from '@prisma/client';
import { ClientProxy } from '@nestjs/microservices';
import { CrearProductoDto } from './dto/crear-producto.dto';

@Injectable()
export class ProductosService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ProductosService');
  onModuleInit() {
    this.$connect();
    this.logger.log('Database connected');
  }


  async crear(crearProductoDto: CrearProductoDto) {
    const productoCreado = await this.productos.create({
      data: {
        nombre: crearProductoDto.nombre,
        descripcion: crearProductoDto.descripcion,
        precio: crearProductoDto.precio,
      },
    });
  
    return productoCreado;
  }

  async findAll() {
    const listaProductos = await this.productos.findMany();
    return listaProductos;
  }

  async eliminar(idcaca: number) {
    try {
      const productoEliminado = await this.productos.delete({
        where: {
          id: idcaca,
        },
      });
      return productoEliminado;
    } catch (error) {
      this.logger.error(`Error eliminando producto con id ${idcaca}: ${error.message}`);
      throw new Error(`Error eliminando producto: ${error.message}`);
    }
  }
}