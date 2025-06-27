import { AutoMap } from '@automapper/classes';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { UserMainDto } from './user-main.dto';
import { Type } from 'class-transformer';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { Role } from 'src/role/entities/role.entity';

export class CreateUserDto {
  @ApiProperty({ example: 'vishv patel' })
  @AutoMap()
  @IsString()
  username: string;

  @ApiProperty()
  @AutoMap()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'secret123' })
  @AutoMap()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'user', description: 'user or admin' })
  @AutoMap()
  @IsString()
  role: Role | number;

  @IsOptional()
  @IsString()
  bio?: string;
}

