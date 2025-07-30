import { AutoMap } from '@automapper/classes';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { UserMainDto } from './user-main.dto';
import { Type } from 'class-transformer';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { Role } from 'src/role/entities/role.entity';
import { ProfileMainDto } from 'src/profile/dto/profile-main.dto';

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

  @ApiProperty({ example: 1  })
  @AutoMap()
  // @IsNumber()
  roleId: number;

  @IsOptional()
  @IsString()
  @AutoMap()
  bio?: string;

  @AutoMap()
  profile?:Partial<ProfileMainDto>;
}

