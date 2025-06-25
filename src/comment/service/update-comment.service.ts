import { Injectable } from '@nestjs/common';
import { CommentRepo } from '../repositories/comment.repo';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { RPCNotFoundException } from 'src/shared/exceptions/notfound.exception';

@Injectable()
export class UpdateCommentService {
    constructor(private readonly commentRepo: CommentRepo) {}
    async update(id: number, updateCommentDto: UpdateCommentDto) {
        const comment_arr = await this.commentRepo.allAsync({id})
        if (comment_arr.length == 0) throw new RPCNotFoundException(`Comment with ID ${id} not found`);
                  
      return this.commentRepo.updateAsync({
        id,
        content: updateCommentDto.content,
        user: updateCommentDto.userId ? { id: updateCommentDto.userId } : undefined,
        post: updateCommentDto.postId ? { id: updateCommentDto.postId } : undefined,
      } as any);
    }
}
