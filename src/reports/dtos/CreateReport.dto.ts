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
  @Min(0)
  @Max(1000000)
  milage: number;
  @IsNumber()
  lat: number;
  @IsNumber()
  lng: number;
  @IsNumber()
  price: number;
}
