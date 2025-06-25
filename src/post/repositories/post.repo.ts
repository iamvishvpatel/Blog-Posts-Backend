import { Injectable } from "@nestjs/common";
import { BaseRepo } from "src/shared";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, Repository } from "typeorm";
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PinoLogger } from "nestjs-pino";
import { PostMainDto } from "../dto/post-main.dto";
import { Post } from "../entities/post.entity";
import { IPageableFilterBase, IFilterBase } from "src/shared/filtering";
import { Tag } from "src/tag/entities/tag.entity";


@Injectable()
export class PostRepoService extends BaseRepo<Post, PostMainDto, number>{
    constructor(
    @InjectRepository(Post) private readonly postRepo: Repository<Post>,
    @InjectMapper() private readonly classMapper: Mapper,
    protected readonly logger: PinoLogger ,
  ) {
    super(postRepo, classMapper, logger, Post, PostMainDto);
  }

  protected override modifyFindOption(findOpts: FindManyOptions<Post>, filterObj: Partial<PostMainDto & IPageableFilterBase<number>> | Partial<PostMainDto & IFilterBase<number>>): void {
      super.modifyFindOption(findOpts, filterObj);
      findOpts.relations = ['author', 'category', 'tags', 'comments'] 
  }

    protected getRelations(): string[] {
    return ['author', 'category', 'tags', 'comments'];
  }
}