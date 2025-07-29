import { Injectable } from '@nestjs/common';
import { CommentRepo } from '../repositories/comment.repo';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { RPCNotFoundException } from 'src/shared/exceptions/notfound.exception';
import { CommentMainDto } from '../dto/comment-main.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { log } from 'console';

@Injectable()
export class UpdateCommentService {
    constructor(private readonly commentRepo: CommentRepo,
      @InjectMapper() private readonly mapper: Mapper
    ) {}
    async update(id: number, updateCommentDto: UpdateCommentDto) {
        const comment_arr = await this.commentRepo.allAsync({id})
        if (comment_arr.length == 0) throw new RPCNotFoundException(`Comment with ID ${id} not found`);
                  
        log(updateCommentDto, "dto1")
        const mapper = this.mapper.map(updateCommentDto, UpdateCommentDto, CommentMainDto)
        console.log(mapper, "mapper");
        
      return this.commentRepo.updateAsync(mapper);
    }
}
