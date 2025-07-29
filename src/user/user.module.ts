import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { userRepo } from './repositories/user.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AutomapperModule } from '@automapper/nestjs';
import { FindByEmailUserService } from './services/find-by-email-user.service';
import { CreateUserService } from './services/create-user.service';
import { GetByIdUserService } from './services/get-by-id-user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    AutomapperModule
  ],
  controllers: [UserController],
  providers: [CreateUserService,FindByEmailUserService, GetByIdUserService, userRepo],
  exports: [CreateUserService, FindByEmailUserService, GetByIdUserService, userRepo]
})
export class UserModule {}
