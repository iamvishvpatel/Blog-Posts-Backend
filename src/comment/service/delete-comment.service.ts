import { Injectable } from '@nestjs/common';
import { CommentRepo } from '../repositories/comment.repo';
import { RPCNotFoundException } from 'src/shared/exceptions/notfound.exception';

@Injectable()
export class DeleteCommentService {
     constructor(private readonly commentRepo: CommentRepo) {}
    async remove(id: number) {
        const post = await this.commentRepo.allAsync({id});
                if(post.length == 0) throw new RPCNotFoundException(`Comment with ID ${id} not exist`)
                
              
                const deleted = await this.commentRepo.deleteAsync(id)
                console.log(deleted, "deleted");
                
                return {message: `Post with ID ${id} deleted successfully`, deleted};
      }
}
