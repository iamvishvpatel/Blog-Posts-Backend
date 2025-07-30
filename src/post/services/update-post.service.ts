import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PostRepoService } from '../repositories/post.repo';
import { User } from 'src/user/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { ArgumentNilException, RpcBaseException } from 'src/exceptions';
import { GetByIdUserService } from 'src/user/services/get-by-id-user.service';

@Injectable()
export class UpdatePostService {
  constructor(
    private readonly postrepo: PostRepoService,
    private readonly getByIdService: GetByIdUserService,
  ) {}

  async update(id: number, dto: UpdatePostDto, user: any) {
    
    const post = await this.postrepo.getAsync(id);

    console.log("-----",dto.categoryId);
    console.log("--------",post.categoryId, "from updated");
    
    if (!dto.authorId) throw new ArgumentNilException('No Author id found.');
    // console.log(post, 'post data ');
    // console.log('------------',post.author.id, user, user.userId,  'it data ');

    if (post.author.id === user.userId || user.role.name === 'admin') {
      const author = await this.getByIdService.getById(dto.authorId);

      if (!post) {
        throw new RpcBaseException(`Post with ID ${id} not found`, 404);
      }

      
        post.title= dto.title ?? post.title,
        post.content= dto.content ?? post.content,
        post.authorId= dto.authorId ?? post.authorId,
        post.categoryId= dto.categoryId ?? post.categoryId,
        post.category.id = dto.categoryId ? dto.categoryId : post.category.id;
        post.tags= dto.tagIds ? dto.tagIds.map((id) => ({ id })) : post.tags,
        post.updatedById= user.userId,
      
      console.log("updateddddddddddddd", post);
      

      await this.postrepo.updateAsync(post);
       


    } else {
      throw new RpcBaseException('You can only update your own posts', 404);
    }
const result = await this.postrepo.getAsync(id);
    return {
      message: 'Post Updated Successfully',
      updated: result,
    };
  }
}
