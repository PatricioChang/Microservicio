import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(
    @Inject('UsuarioService') private readonly usuarioClient: ClientProxy,
  ) {}

  @Post()
public async create(@Body() createUsuarioDto: CreateUsuarioDto) {
  try {
    const user = await firstValueFrom(
      this.usuarioClient.send({ cmd: 'crear' }, createUsuarioDto),
    );
    return user;
  } catch (error) {
    console.error('Error al crear usuario en el cliente:', error); 
    throw new RpcException(error);
  }
}
}
