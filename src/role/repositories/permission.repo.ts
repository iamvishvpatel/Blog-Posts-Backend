import { BaseRepo } from "src/shared";
import { PermissionMainDto } from "../dto/permission-main.dto";
import { Permission } from "../entities/permission.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, Repository } from "typeorm";
import { InjectMapper } from "@automapper/nestjs";
import { PinoLogger } from "nestjs-pino";
import { Mapper } from "@automapper/core";
import { IFilterBase, IPageableFilterBase } from "src/shared/filtering";


@Injectable()
export class PermissionRepo extends BaseRepo<Permission, PermissionMainDto, number> {
  constructor(
    @InjectRepository(Permission) private readonly permissionRepo: Repository<Permission>,
    @InjectMapper() private readonly classMapper: Mapper,
    protected readonly logger: PinoLogger,
  ) {
    super(permissionRepo, classMapper, logger, Permission, PermissionMainDto);
  }

  protected override getRelations(): string[] {
    return ['roles'];
  }

  protected override modifyFindOption(
    findOpts: FindManyOptions<Permission>,
    filterObj: Partial<PermissionMainDto & IPageableFilterBase<number>> | Partial<PermissionMainDto & IFilterBase<number>>,
  ): void {
    super.modifyFindOption(findOpts, filterObj);
    findOpts.relations = this.getRelations();
  }
}
