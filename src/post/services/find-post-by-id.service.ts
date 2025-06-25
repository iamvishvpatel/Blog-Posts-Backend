import { Injectable } from '@nestjs/common';
import { PostRepoService } from '../repositories/post.repo';
import { RpcInternalServerErrorException } from 'src/shared/exceptions';
import { PostResponseDto } from '../dto/post-response.dto';

@Injectable()
export class FindPostByIdService {
    constructor(private readonly postrepo: PostRepoService) {}
    async findById(id: number): Promise<PostResponseDto[]> {
        try {
          // const posts = this.postrepo.getAsync(id);
          const post = await  this.postrepo.allAsync({id});
          // console.log(posts.length == 0);
          
          if (post.length == 0) throw new RpcInternalServerErrorException(`Post with ID ${id} not found`);
          console.log(post, "post");
          
          return post;
        } catch (error) { 
          this.postrepo['logger'].error(error);
          throw new RpcInternalServerErrorException(error);
        }
      }
}
