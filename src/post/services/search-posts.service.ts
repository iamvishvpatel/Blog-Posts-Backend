import { Injectable } from '@nestjs/common';
import { PostRepoService } from '../repositories/post.repo';
import { SearchPostDto } from '../dto/search-post.dto';
import { EOrder, IPageable } from 'src/shared/filtering';
import { PostResponseDto } from '../dto/post-response.dto';

@Injectable()
export class SearchPostsService {
  constructor(private readonly postrepo: PostRepoService) {}
  async search(dto: SearchPostDto): Promise<IPageable<PostResponseDto>> {
    const where: any = {};
    if (dto.title) where.title = dto.title;
    if (dto.categoryId) where.category = { id: dto.categoryId };
    if (dto.tagIds && dto.tagIds.length > 0) {
      where.tags = { id: dto.tagIds[0] };
    }
    if (dto.page) where.$page = dto.page;
    if (dto.limit) where.$perPage = dto.limit;
    where.$orderBy = 'createdAt';
    where.$order = EOrder.Desc;

    return this.postrepo.pagedAsync(where);
  }
}
