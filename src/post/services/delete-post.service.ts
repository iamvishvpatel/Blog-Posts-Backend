import { Injectable } from '@nestjs/common';
import { PostRepoService } from '../repositories/post.repo';
import { DbException } from 'src/shared';
import { RPCNotFoundException } from 'src/shared/exceptions/notfound.exception';
import { RpcBaseException } from 'src/exceptions';

@Injectable()
export class DeletePostService {
    constructor(private readonly postrepo: PostRepoService) {}

    async remove(id: number, user: any) {
        const post = await this.postrepo.allAsync({id});
        if(post.length == 0) throw new RPCNotFoundException(`Post with ID ${id} not exist`)
        
      const isAdmin = user.role?.name === 'admin'
       const isOwner = post[0].author?.id === user.userId;

       if (!isAdmin && !isOwner) {
    throw new RpcBaseException('You are not allowed to delete this post', 404);
  }
        const deleted = await this.postrepo.deleteAsync(id)
        console.log(deleted, "deleted");
        
        return {message: `Post with ID ${id} deleted successfully`, deleted};
      }
}
