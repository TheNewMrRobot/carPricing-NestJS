import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(email: string, password: string) {
    // check already signed up or not
    const user = await this.userService.find(email);
    if (user.length > 0) {
      throw new BadRequestException('Email Already in use');
    }
    // if already signed up throw error
    // hash the password
    // create a user and save it
    // return the user
  }

  signIn() {}
}
