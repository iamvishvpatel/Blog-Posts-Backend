import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RPCNotFoundException } from 'src/shared/exceptions/notfound.exception';
import { RoleRepo } from './repositories/role.repo';
import { PermissionRepo } from './repositories/permission.repo';
import { RoleMainDto } from './dto/role-main.dto';
import { RpcBaseException } from 'src/shared/exceptions';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class RoleService {
  constructor(
    private readonly roleRepo: RoleRepo,
    private readonly permissionRepo: PermissionRepo,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async create(dto: CreateRoleDto) {
    const mapped = this.mapper.map(dto, CreateRoleDto, RoleMainDto);
    return this.roleRepo.createAsync(mapped);
  }

  async findAll() {
    return this.roleRepo.allAsync({});
  }

  async findOne(id: number) {
    const role = await this.roleRepo.getAsync(id);
    if (!role) throw new RPCNotFoundException(`Role with ID ${id} not found`);
    return role;
  }

  async update(id: number, dto: UpdateRoleDto) {
    const existing = await this.roleRepo.getAsync(id);
    if (!existing)
      throw new RPCNotFoundException(`Role with ID ${id} not found`);
    console.log(existing, 'before role');

    const updated: RoleMainDto = { ...existing, ...dto };
    console.log(updated, 'after upadte');

    return this.roleRepo.updateAsync(updated);
  }

  async remove(id: number) {
    const role = await this.roleRepo.allAsync({ id });
    if (role.length == 0)
      throw new RPCNotFoundException(`Role with ID ${id} not exist`);

    const deleted = await this.roleRepo.deleteAsync(id);
    console.log(deleted, 'deleted');

    return { message: `Role with ID ${id} deleted successfully`, deleted };
  }

  async assignPermission(roleId: number, permissionIds: number[]) {
    const role = await this.roleRepo.getAsync(roleId);
    if (!role)
      throw new RPCNotFoundException(`Role with ID ${roleId} not found`);

    const permissions = await this.permissionRepo.allAsync({
      $ids: permissionIds,
    });
    const updated: RoleMainDto = { ...role, permissions };
    return this.roleRepo.updateAsync(updated);
  }
}
