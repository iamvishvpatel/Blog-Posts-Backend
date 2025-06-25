import { Injectable } from '@nestjs/common';
import { PostRepoService } from '../repositories/post.repo';
import { DbException } from 'src/shared';

@Injectable()
export class DeletePostService {
    constructor(private readonly postrepo: PostRepoService) {}

    async remove(id: number) {
        const post = await this.postrepo.allAsync({id});
        if(post.length == 0) return new DbException(`Post with ID ${id} not exist`)
        
      
        const deleted = await this.postrepo.deleteAsync(id)
        console.log(deleted, "deleted");
        
        return {message: `Post with ID ${id} deleted successfully`, deleted};
      }
}
