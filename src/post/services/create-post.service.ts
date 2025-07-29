import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostRepoService } from '../repositories/post.repo'; 
import { CategoryService } from 'src/category/category.service';
import { Post } from '../entities/post.entity';
import { DbException } from 'src/shared';
import { TagRepo } from 'src/tag/repositories/tag.repo';
import { CommentRepo } from 'src/comment/repositories/comment.repo';
import { GetByIdUserService } from 'src/user/services/get-by-id-user.service';
import { PostResponseDto } from '../dto/post-response.dto';
import { RPCNotFoundException } from 'src/shared/exceptions/notfound.exception';
import { log } from 'console';
import { PostMainDto } from '../dto/post-main.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class CreatePostService {
  constructor(
    private readonly postrepo: PostRepoService,
    private readonly getByIdService: GetByIdUserService,
    private readonly categoryService: CategoryService,
    private readonly tagrepo: TagRepo,
    private readonly commentrepo: CommentRepo,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async create(dto: CreatePostDto): Promise<PostResponseDto> {
    console.log(dto, "dto from  post ");
    
    const author = await this.getByIdService.getById(dto.authorId);
    const category = await this.categoryService.getById(dto.categoryId);
    const tags = await this.tagrepo.findByIDs(dto.tagIds || []);
    const comments = await this.commentrepo.findByIDs(dto.commentIds || [])

    if (!author) throw new RPCNotFoundException('Author not found');
    if (!category) throw new RPCNotFoundException('Category not found');
    if (!comments) throw new RPCNotFoundException('Comments not found');

    // console.log(author, "author");
    
    const post = {
      title: dto.title,
      content: dto.content,
      author,
      category,
      tags,
      comments
    };
console.log(post, "----post");
    const mapped = this.mapper.map(dto, CreatePostDto, PostMainDto);
    return this.postrepo.createAsync(mapped);
  }
}
