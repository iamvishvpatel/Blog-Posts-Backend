import { Injectable } from '@nestjs/common';
import { UserMainDto } from '../dto/user-main.dto';
import { userRepo } from '../repositories/user.repo';
import { UserResponseDto } from '../dto/user-response.dto';

@Injectable()
export class GetByIdUserService {
    constructor( private readonly userrepo: userRepo){}
    
    async  getById(id: number): Promise<UserResponseDto> {
          return this.userrepo.getAsync(id);
    }
}
