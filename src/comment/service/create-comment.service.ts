import { Injectable } from '@nestjs/common';
import { CommentRepo } from '../repositories/comment.repo';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entities/post.entity';

@Injectable()
export class CreateCommentService {
    constructor(private readonly commentRepo: CommentRepo) {}
    async create(createCommentDto: CreateCommentDto) {
        const { content, userId, postId } = createCommentDto;
    
        return this.commentRepo.createAsync({
          content,
          user: { id: userId } as User,
          post: { id: postId } as Post,
        });
      }
}
