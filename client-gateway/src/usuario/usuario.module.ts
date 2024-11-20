import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [UsuarioController],
  providers: [],
  imports: [ClientsModule.register([
    {
      name: 'UsuarioService',
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3002 },
    },
  ]),]
})
export class UsuarioModule {}
