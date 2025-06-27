import { Injectable } from "@nestjs/common";
import { PermissionRepo } from "./repositories/permission.repo";
import { CreatePermissionDto } from "./dto/create-permission.dto";
import { PermissionMainDto } from "./dto/permission-main.dto";
import { RPCNotFoundException } from "src/shared/exceptions/notfound.exception";
import { UpdatePermissionDto } from "./dto/update-permission.dto";

@Injectable()
export class PermissionService{
    constructor(private readonly permissionRepo: PermissionRepo){}

    async create(dto: CreatePermissionDto){
        return this.permissionRepo.createAsync(dto as unknown as PermissionMainDto);
    }

    async findAll(): Promise<PermissionMainDto[]> {
    return this.permissionRepo.allAsync({});
  }

  async findOne(id: number): Promise<PermissionMainDto> {
    const permission = await this.permissionRepo.getAsync(id);
    if (!permission) throw new RPCNotFoundException(`Permission with ID ${id} not found`);
    return permission;
  }

  async update(id: number, dto: UpdatePermissionDto): Promise<PermissionMainDto> {
    const existing = await this.permissionRepo.getAsync(id);
    if (!existing) throw new RPCNotFoundException(`Permission with ID ${id} not found`);

    const updated: PermissionMainDto = { ...existing, ...dto };
    return this.permissionRepo.updateAsync(updated);
  }

  async remove(id: number){
    const permission = await this.permissionRepo.allAsync({ id });
    if (permission.length == 0)
      throw new RPCNotFoundException(`Permission with ID ${id} not exist`);

    const deleted = await this.permissionRepo.deleteAsync(id);
    console.log(deleted, 'deleted');

    return { message: `Permission with ID ${id} deleted successfully`, deleted };
  }
}