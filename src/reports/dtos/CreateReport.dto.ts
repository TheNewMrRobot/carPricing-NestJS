import {
  IsNumber,
  IsString,
  Min,
  MAX,
  IsLatitude,
  IsLongitude,
  Max,
} from 'class-validator';

export class CreateReportDTO {
  @IsString()
  make: string;
  @IsString()
  model: string;
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;
  @IsNumber()
  @Min(1)
  @Max(1000000)
  mileage: number;
  @IsLatitude()
  lat: number;
  @IsLongitude()
  lng: number;
  @IsNumber()
  price: number;
}
