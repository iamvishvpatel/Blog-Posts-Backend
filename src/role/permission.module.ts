import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './entities/permission.entity';
import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionRepo } from './repositories/permission.repo';
import { PermissionsController } from './permission.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  providers: [PermissionService, PermissionRepo],
  controllers: [PermissionsController],
  exports: [PermissionService, PermissionRepo],
})
export class PermissionModule {}
