import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/users.entity';

export class ReportDTO {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  lat: number;
  @Expose()
  lng: number;
  @Expose()
  year: number;
  @Expose()
  mileage: number;
  @Expose()
  make: string;
  @Expose()
  model: string;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
