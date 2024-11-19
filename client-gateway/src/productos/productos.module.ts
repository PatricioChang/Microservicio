import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [ProductosController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: 'ProductosService',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3005 },
      },
      {
        name: 'ProductosEspejoService',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3010 },
      },
    ]),
  ]
})
export class ProductosModule {}
