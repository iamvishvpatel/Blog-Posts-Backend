import { Injectable } from '@nestjs/common';
import { UserMainDto } from '../dto/user-main.dto';
import { userRepo } from '../repositories/user.repo';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userrepo: userRepo,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}
  async create(dto: CreateUserDto): Promise<UserMainDto> {
    const userDto = this.mapper.map(dto, CreateUserDto, UserMainDto);
    return this.userrepo.createAsync(userDto);
  }
}
