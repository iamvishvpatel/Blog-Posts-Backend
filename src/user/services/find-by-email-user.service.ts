import { Injectable } from '@nestjs/common';
import { UserMainDto } from '../dto/user-main.dto';
import { userRepo } from '../repositories/user.repo';

@Injectable()
export class FindByEmailUserService {
    constructor( private readonly userrepo: userRepo){}
    async findByEmail(email: string): Promise<UserMainDto[]> {
        return this.userrepo.allAsync({
        email: email
      });
      }
}
