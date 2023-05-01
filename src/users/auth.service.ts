import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(email: string, password: string) {
    // check already signed up or not
    const users = await this.userService.find(email);

    // if already signed up throw error
    if (users.length > 0) {
      throw new BadRequestException('Email Already in use');
    }
    // generate the salt
    const salt = randomBytes(8).toString('hex');
    // hashing the password
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    // join hash and salt
    const result = salt + '.' + hash.toString('hex');
    // create a user and save it
    const user = await this.userService.create(email, result);
    // return the user
    return user;
  }

  async signIn(email: string, password: string) {
    const [user] = await this.userService.find(email);
    if (!user) {
      throw new NotFoundException('No User Found');
    }
    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (hash.toString('hex') !== storedHash) {
      throw new BadRequestException('Bad Password');
    }
    return user;
  }
}
