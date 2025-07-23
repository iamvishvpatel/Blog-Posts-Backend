import { Injectable } from "@nestjs/common";
import { BaseRepo } from "src/shared";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, In, Repository } from "typeorm";
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PinoLogger } from "nestjs-pino";
import { Comment } from "../entities/comment.entity";
import { CommentMainDto } from "../dto/comment-main.dto";
import { IPageableFilterBase, IFilterBase } from "src/shared/filtering";


@Injectable()
export class CommentRepo extends BaseRepo<Comment, CommentMainDto, number>{
    constructor(
    @InjectRepository(Comment) private readonly commentRepo: Repository<Comment>,
    @InjectMapper() private readonly classMapper: Mapper,
    protected readonly logger: PinoLogger ,
  ) {
    super(commentRepo, classMapper, logger, Comment, CommentMainDto);
  }

  async findByIDs(ids: number[]){
    return this.commentRepo.findBy({id: In(ids)})
  }

  protected modifyFindOption(findOpts: FindManyOptions<Comment>, filterObj: Partial<CommentMainDto & IPageableFilterBase<number>> | Partial<CommentMainDto & IFilterBase<number>>): void {
      super.modifyFindOption(findOpts, filterObj);
      findOpts.relations = ['user', 'post']
  }

  protected getRelations(): string[] {
  return ['user', 'post'];
}
}