import { Injectable } from "@nestjs/common";
import { BaseRepo } from "src/shared";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PinoLogger } from "nestjs-pino";
import { Tag } from "../entities/tag.entity";
import { TagMainDto } from "../dto/tag-main.dto";


@Injectable()
export class TagRepo extends BaseRepo<Tag, TagMainDto, number>{
    constructor(
    @InjectRepository(Tag) private readonly tagRepo: Repository<Tag>,
    @InjectMapper() private readonly classMapper: Mapper,
    protected readonly logger: PinoLogger ,
  ) {
    super(tagRepo, classMapper, logger, Tag, TagMainDto);
  }

  async findByIDs(ids: number[]){
    return this.tagRepo.findBy({id: In(ids)})
  }
}