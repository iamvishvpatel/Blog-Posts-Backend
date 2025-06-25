import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @AutoMap()
  @ApiProperty()
  @IsString()
  name: string;
}

