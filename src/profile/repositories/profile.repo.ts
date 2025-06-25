import { Injectable } from "@nestjs/common";
import { BaseRepo } from "src/shared";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PinoLogger } from "nestjs-pino";
import { Profile } from "../entities/profile.entity";
import { ProfileMainDto } from "../dto/profile-main.dto";


@Injectable()
export class profileRepo extends BaseRepo<Profile, ProfileMainDto, number>{
    constructor(
    @InjectRepository(Profile) private readonly profileRepo: Repository<Profile>,
    @InjectMapper() private readonly classMapper: Mapper,
    protected readonly logger: PinoLogger ,
  ) {
    super(profileRepo, classMapper, logger, Profile, ProfileMainDto);
  }
} 