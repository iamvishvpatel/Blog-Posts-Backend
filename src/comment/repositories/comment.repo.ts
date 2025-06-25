import { Injectable } from "@nestjs/common";
import { BaseRepo } from "src/shared";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PinoLogger } from "nestjs-pino";
import { Comment } from "../entities/comment.entity";
import { CommentMainDto } from "../dto/comment-main.dto";


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

  protected getRelations(): string[] {
  return ['user', 'post'];
}
}