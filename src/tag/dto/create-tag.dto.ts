import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTagDto {
  @AutoMap()
  @ApiProperty()
  @IsString()
  name: string;
}

