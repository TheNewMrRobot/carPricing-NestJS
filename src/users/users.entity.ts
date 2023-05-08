import { Report } from 'src/reports/reports.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToMany,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

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
