import { Injectable } from '@nestjs/common';
import { CommentRepo } from '../repositories/comment.repo';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { User } from 'src/user/entities/user.entity';
import { Post } from 'src/post/entities/post.entity';
import { CommentMainDto } from '../dto/comment-main.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class CreateCommentService {
    constructor(private readonly commentRepo: CommentRepo,@InjectMapper() private readonly mapper:Mapper) {}
    async create(createCommentDto: CreateCommentDto) {
        // const { content, userId, postId } = createCommentDto;
        const mappedDto = this.mapper.map(createCommentDto, CreateCommentDto, CommentMainDto)
    
        return this.commentRepo.createAsync(mappedDto);
      }
}
