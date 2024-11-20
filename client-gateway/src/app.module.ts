import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductosModule, UsuarioModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
