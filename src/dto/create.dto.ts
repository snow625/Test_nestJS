import { IsNumber, Min, Max } from 'class-validator';

export class CreateDto {
  @Min(1)
  @Max(999)
  @IsNumber()
  num: number;
}
