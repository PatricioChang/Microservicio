import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Productos } from '@prisma/client';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async crear(data: { nombre: string; descripcion: string; precio: number }): Promise<Productos> {
    return this.prisma.productos.create({
      data,
    });
  }

  async findAll(): Promise<Productos[]> {
    return this.prisma.productos.findMany();
  }
}