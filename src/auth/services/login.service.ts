import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../dto/Login/login.dto';
import { FindByEmailUserService } from 'src/user/services/find-by-email-user.service';

@Injectable()
export class LoginService {
    constructor(
        private readonly findbyemailservice: FindByEmailUserService,
        private readonly jwtservice: JwtService,
      ) {}
    async login(dto: LoginDto) {
        const user = await this.findbyemailservice.findByEmail(dto.email);
        console.log(user, 'user');
        console.log(dto.password, user[0].password, 'password');
    
        if (!user || !(await bcrypt.compare(dto.password, user[0].password))) {
          throw new UnauthorizedException('Invalid credentials');
        }
    
        const data = { sub: user[0].id, email: user[0].email };
        console.log(data, 'data');
    
        return {
          access_token: this.jwtservice.sign(data),
          user: user,
        };
      }
}
