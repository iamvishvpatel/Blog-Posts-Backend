import { Injectable } from '@nestjs/common';
import { CommentRepo } from '../repositories/comment.repo';
import { CommentMainDto } from '../dto/comment-main.dto';
import { EOrder } from 'src/shared/filtering';

@Injectable()
export class FindAllCommentService {
    constructor(private readonly commentRepo: CommentRepo) {}
    async findAll(): Promise<CommentMainDto[]> {
        return this.commentRepo.allAsync({$orderBy:'id', $order:EOrder.Desc});
      }
}
