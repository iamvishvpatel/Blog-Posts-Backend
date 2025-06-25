import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profile/entities/profile.entity';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async(configservice : ConfigService) => ({
        secret: configservice.get('JWT_SECRET') || 'TASK8SECRET',
        signOptions: {expiresIn : '1d'}
      })
    }), UserModule
  ],
  providers: [ JwtStrategy, RegisterService, LoginService],
  controllers: [AuthController],
  exports: [RegisterService, LoginService, JwtStrategy],
})
export class AuthModule {}
