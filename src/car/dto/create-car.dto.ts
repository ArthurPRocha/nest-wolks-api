import { Transform } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateCarDTO {
  @IsString()
  @Length(1, 20)
  model: string;

  @IsString()
  @Length(15, 100)
  info: string;

  @IsNumber()
  @Transform(({ value }) => parseInt(value, 10))
  @Min(1886)
  @Max(new Date().getFullYear())
  year: number;

  @IsUrl()
  image_url: string;

  @Transform(({ value }) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error('Float Expected.');
    }
    return parsedValue;
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}
