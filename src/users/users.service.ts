import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) public repo: Repository<User>) {}
  create(email: string, password: string) {
    //this will create only the instance of the USER
    //if we ran like then hooks will be executed after each transaction otherwise not
    const user = this.repo.create({ email, password });
    //this will save into the DB based on instance created
    return this.repo.save(user);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  find(email: string) {
    return this.repo.find({ where: { email } });
  }
  //partial will update one property or any property in the ENTITY
  //attrs is attributes
  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('No User Found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('No User Found');
    }
    // remove is work with ENTITY & delete is work with Plain Objects
    return this.repo.remove(user);
  }
}
