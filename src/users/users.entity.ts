import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  //Hooks
  @AfterInsert()
  logInsert() {
    console.log('User Created with', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('User updated with', this.id);
  }
  @AfterRemove()
  logDelete() {
    console.log('User Deleted with', this.id);
  }
}
