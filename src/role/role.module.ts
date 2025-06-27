import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { RoleRepo } from './repositories/role.repo';
import { Permission } from './entities/permission.entity';
import { PermissionRepo } from './repositories/permission.repo';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission])],
  controllers: [RoleController],
  providers: [RoleService, RoleRepo, PermissionRepo],
  exports: [RoleRepo, RoleService],
})
export class RoleModule {}
