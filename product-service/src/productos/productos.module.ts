import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [ProductosService],
  controllers: [ProductosController],
  imports: [PrismaModule, ClientsModule.register([
    {
      name: 'PRODUCTOS_QUEUE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'productos',
        queueOptions: { durable: false },
      },
    },
  ]),],
})
export class ProductosModule {}
