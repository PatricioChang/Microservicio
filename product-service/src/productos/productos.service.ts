import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Productos } from '@prisma/client';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService,
    @Inject('PRODUCTOS_QUEUE') private client: ClientProxy,
  ) {}

  async crear(data: { nombre: string; descripcion: string; precio: number }): Promise<Productos> {
    const productoCreado = await this.prisma.productos.create({
      data,
    });
    this.client.emit('producto_agregado', productoCreado); 

    return productoCreado;
  }

  async findAll(): Promise<Productos[]> {
    return this.prisma.productos.findMany();
  }
}