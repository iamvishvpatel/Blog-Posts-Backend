import { an } from '@faker-js/faker/dist/airline-BUL6NtOJ';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { GetByIdUserService } from 'src/user/services/get-by-id-user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configservice: ConfigService,
    private readonly userService: GetByIdUserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configservice.get('JWT_SECRET') || 'Task8SECRET',
    });
  }

  async validate(data: any) {
    const user = await this.userService.getById(data.sub);
    console.log(user, 'log user from jwt strategy file');

    // console.log(user.role.permissions, 'role permissions from entity');
    const role = user.role;

    const permissions =
      role?.permissions?.map((perm) => ({
        id: perm.id,
        name: perm.name,
      })) ?? [];

    return {
      userId: user.id,
      email: user.email,
      role: { id: role?.id, name: role?.name },
      permissions,
    };
  }
}
