import { Injectable } from '@nestjs/common';
import { RpcInternalServerErrorException } from 'src/shared/exceptions';
import { PostRepoService } from '../repositories/post.repo';
import { PostResponseDto } from '../dto/post-response.dto';

@Injectable()
export class FindAllPostService {
    constructor(private readonly postrepo: PostRepoService) {}
    async findAll(): Promise<PostResponseDto[]> {
        try {
          return this.postrepo.allAsync({});
        } catch (error) {
          this.postrepo['logger'].error(error);
          throw new RpcInternalServerErrorException(error);
        }
      }
}
