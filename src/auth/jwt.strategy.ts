import { an } from "@faker-js/faker/dist/airline-BUL6NtOJ";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(configservice: ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configservice.get('JWT_SECRET') || 'Task8SECRET',
        })
    }

    async validate(data: any){        
        return { userId: data.sub, email: data.email };
    }
}