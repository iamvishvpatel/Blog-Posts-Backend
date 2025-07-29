import { Injectable } from '@nestjs/common';
import { PermissionRepo } from './repositories/permission.repo';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { PermissionMainDto } from './dto/permission-main.dto';
import { RPCNotFoundException } from 'src/shared/exceptions/notfound.exception';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class PermissionService {
  constructor(
    private readonly permissionRepo: PermissionRepo,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async create(dto: CreatePermissionDto) {
    const mapped = this.mapper.map(dto, CreatePermissionDto, PermissionMainDto);
    return this.permissionRepo.createAsync(mapped);
  }

  async findAll(): Promise<PermissionMainDto[]> {
    return this.permissionRepo.allAsync({});
  }

  async findOne(id: number): Promise<PermissionMainDto> {
    const permission = await this.permissionRepo.getAsync(id);
    if (!permission)
      throw new RPCNotFoundException(`Permission with ID ${id} not found`);
    return permission;
  }

  async update(
    id: number,
    dto: UpdatePermissionDto,
  ): Promise<PermissionMainDto> {
    const existing = await this.permissionRepo.getAsync(id);
    if (!existing)
      throw new RPCNotFoundException(`Permission with ID ${id} not found`);

    const updated: PermissionMainDto = { ...existing, ...dto };
    return this.permissionRepo.updateAsync(updated);
  }

  async remove(id: number) {
    const permission = await this.permissionRepo.allAsync({ id });
    if (permission.length == 0)
      throw new RPCNotFoundException(`Permission with ID ${id} not exist`);

    const deleted = await this.permissionRepo.deleteAsync(id);
    console.log(deleted, 'deleted');

    return {
      message: `Permission with ID ${id} deleted successfully`,
      deleted,
    };
  }
}
