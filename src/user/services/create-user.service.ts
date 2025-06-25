import { Injectable } from '@nestjs/common';
import { UserMainDto } from '../dto/user-main.dto';
import { userRepo } from '../repositories/user.repo';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserService {
    constructor( private readonly userrepo: userRepo){}
    async create(dto: CreateUserDto): Promise<UserMainDto> {
          return this.userrepo.createAsync(dto as unknown as UserMainDto);
    }
}
