import { Injectable } from '@nestjs/common';
import { CommentRepo } from '../repositories/comment.repo';
import { CommentMainDto } from '../dto/comment-main.dto';

@Injectable()
export class FindAllCommentService {
    constructor(private readonly commentRepo: CommentRepo) {}
    async findAll(): Promise<CommentMainDto[]> {
        return this.commentRepo.allAsync({});
      }
}
