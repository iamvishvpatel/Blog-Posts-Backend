import { Injectable } from '@nestjs/common';
import { CommentMainDto } from '../dto/comment-main.dto';
import { CommentRepo } from '../repositories/comment.repo';
import { RPCNotFoundException } from 'src/shared/exceptions/notfound.exception';

@Injectable()
export class FindOneCommentService {
    constructor(private readonly commentRepo: CommentRepo) {}
    async findOne(id: number): Promise<CommentMainDto> {
        const comment_arr = await  this.commentRepo.allAsync({id : id});
        if(comment_arr.length == 0) throw new RPCNotFoundException(`Comment with This ID ${id} is Not Found`)
        const comment = comment_arr[0]
        return comment
      }
}
