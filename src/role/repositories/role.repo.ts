import { Injectable } from "@nestjs/common";
import { BaseRepo } from "src/shared";
import { RoleMainDto } from "../dto/role-main.dto";
import { Role } from "../entities/role.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { InjectMapper } from "@automapper/nestjs";
import { FindManyOptions, Repository } from "typeorm";
import { Mapper } from "@automapper/core";
import { PinoLogger } from "nestjs-pino";
import { IFilterBase, IPageableFilterBase } from "src/shared/filtering";

@Injectable()
export class RoleRepo extends BaseRepo<Role, RoleMainDto, number>{
    constructor(
    @InjectRepository(Role) private readonly roleRepo: Repository<Role>,
    @InjectMapper() private readonly classMapper: Mapper,
    protected readonly logger: PinoLogger,
  ) {
    super(roleRepo, classMapper, logger, Role, RoleMainDto);
  }

  protected override getRelations(): string[] {
    return ['permissions'];
  }

  protected override modifyFindOption(
    findOpts: FindManyOptions<Role>,
    filterObj: Partial<RoleMainDto & IPageableFilterBase<number>> | Partial<RoleMainDto & IFilterBase<number>>,
  ): void {
    super.modifyFindOption(findOpts, filterObj);
    findOpts.relations = this.getRelations();
  }
}