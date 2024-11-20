import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { LoginUsuarioDto } from './dto/login-usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AuthService') private readonly authClient: ClientProxy,
  ) {}

  @Post('login')
  async login(@Body() data: LoginUsuarioDto) {
    try {
      const user = await firstValueFrom(
        this.authClient.send({ cmd: 'login-user' }, data),
      );
      return user;
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
