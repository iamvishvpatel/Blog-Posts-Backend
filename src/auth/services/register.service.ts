import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../dto/Register/register.dto';
import { User } from 'src/user/entities/user.entity';
import { ArgumentNilException } from 'src/exceptions';
import { FindByEmailUserService } from 'src/user/services/find-by-email-user.service';
import { CreateUserService } from 'src/user/services/create-user.service';

@Injectable()
export class RegisterService {
    constructor(
        private readonly findbyemailservice: FindByEmailUserService,
        private readonly createuserservice: CreateUserService,
      ) {}
    async register(dto: RegisterDto) {
        const existing = await this.findbyemailservice.findByEmail(dto.email);
        // console.log(existing, 'existing');
         
        if (existing.length > 0) {
          throw new BadRequestException('Email already exists');
        }
    
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        
        if(!dto.bio) throw new  ArgumentNilException("Bio is Not provided")
        const user = {
          username: dto.name,
          email: dto.email,
          password: hashedPassword,
          role: dto.role,
          profile: {
            bio: dto.bio
          },
        };
        const created = await this.createuserservice.create(user as User);
        // const profile = await this.profileRepo.createAsync({ bio: dto.bio });
    
        return { message: 'User registered successfully', created };
      }
}
