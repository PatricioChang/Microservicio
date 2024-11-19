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
    const criminal = await this.productos.create({
      data: crearProductoDto,
    });

    return criminal;
  }

  async findAll() {
    const listaProductos = await this.productos.findMany();
    return listaProductos;
  }
}