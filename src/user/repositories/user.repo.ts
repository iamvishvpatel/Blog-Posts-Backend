import { Injectable } from "@nestjs/common";
import { BaseRepo } from "src/shared";
import { User } from "../entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, In, Repository } from "typeorm";
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PinoLogger } from "nestjs-pino";
import { UserMainDto } from "../dto/user-main.dto";
import { IFilterBase, IPageableFilterBase } from "src/shared/filtering";


@Injectable()
export class userRepo extends BaseRepo<User, UserMainDto, number>{
    constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectMapper() private readonly classMapper: Mapper,
    protected readonly logger: PinoLogger ,
  ) {
    super(userRepo, classMapper, logger, User, UserMainDto);
  }

  protected override modifyFindOption(findOpts: FindManyOptions<User>, filterObj: Partial<UserMainDto & IPageableFilterBase<number>> | Partial<UserMainDto & IFilterBase<number>>): void {
        super.modifyFindOption(findOpts, filterObj);
        findOpts.relations = ['profile', "role" , 'role.permissions'] 
    }

    protected getRelations(): string[] {
    return ['profile', 'role', 'role.permissions'];
  }
}