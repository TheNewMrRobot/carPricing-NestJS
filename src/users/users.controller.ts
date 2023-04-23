import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { log } from 'console';

@Controller('auth')
export class UsersController {
  @Post('/signUp')
  createUser(@Body() body: CreateUserDTO) {
    log(body);
  }
}
