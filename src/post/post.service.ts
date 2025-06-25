// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Post } from './entities/post.entity';
// import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';
// import { User } from 'src/user/entities/user.entity';
// import { Category } from 'src/category/entities/category.entity';
// import { Tag } from 'src/tag/entities/tag.entity';
// import {
//   RpcBaseException,
//   RpcInternalServerErrorException,
// } from 'src/exceptions';
// import { PostRepoService } from './repositories/post.repo';
// import { title } from 'process';
// import { SearchPostDto } from './dto/search-post.dto';
// import { UserService } from 'src/user/services/user.service';
// import { CategoryService } from 'src/category/category.service';
// import { Injectable } from '@nestjs/common';
// import { DbException } from 'src/shared';

// @Injectable()
// export class PostService {
//   constructor(
//     private readonly postrepo: PostRepoService,
//     private readonly userService: UserService,
//     private readonly categoryService: CategoryService,
//     @InjectRepository(Tag) private readonly tagRepo: Repository<Tag>,
//   ) {}

//   async findAll() {
//     try {
//       return this.postrepo.allAsync({});
//     } catch (error) {
//       this.postrepo['logger'].error(error);
//       return new RpcInternalServerErrorException();
//     }
//   }

//   async findById(id: number) {
//     try {
//       // const posts = this.postrepo.getAsync(id);
//       const posts = await this.postrepo.allAsync({ id });
//       // console.log(posts.length == 0);

//       if (posts.length == 0)
//         return new RpcInternalServerErrorException(
//           `Post with ID ${id} not found`,
//         );
//       return posts;
//     } catch (error) {
//       this.postrepo['logger'].error(error);
//       return new RpcInternalServerErrorException();
//     }
//   }

//   async create(dto: CreatePostDto) {
//     const author = await this.userService.getById(dto.authorId);
//     const category = await this.categoryService.getById(dto.categoryId);
//     const tags = await this.tagRepo.findByIds(dto.tagIds || []);

//     if (!author) return new DbException('Author not found');
//     if (!category) return new DbException('Category not found');

//     const post = {
//       title: dto.title,
//       author,
//       category,
//       tags,
//     };
//     const created = await this.postrepo.createAsync(post as Post);
//     return created;
//   }

//   async update(id: number, dto: UpdatePostDto) {
//     const post_temp = await this.postrepo.allAsync({ id: id });
//     const post = post_temp[0];
//     console.log(post, 'posts');

//     if (!post) throw new RpcBaseException(`Post with ID ${id} not found`, 404);

//     const updatePost = {
//       title: dto.title ?? post.title,
//       author: dto.authorId ? ({ id: dto.authorId } as User) : post.author,
//       category: dto.categoryId
//         ? ({ id: dto.categoryId } as Category)
//         : post.category,
//       tags: dto.tagIds
//         ? (dto.tagIds.map((id) => ({ id })) as Tag[])
//         : post.tags,
//     };

//     await this.postrepo.updateAsync({ ...post, ...updatePost });
//     console.log(
//       await this.postrepo.updateAsync({ ...post, ...updatePost }),
//       'updated Post data',
//     );

//     const updated = await this.postrepo.getAsync(id);
//     return { message: 'Post Updated Successfully', updated };
//   }

//   async remove(id: number) {
//     const post = await this.postrepo.allAsync({ id });
//     if (post.length == 0) return new DbException('Post not found');

//     const deleted = await this.postrepo.deleteAsync(id);
//     console.log(deleted, 'deleted');

//     return { message: `Post with ID ${id} deleted successfully`, deleted };
//   }

//   async search(dto: SearchPostDto) {
//     const where: any = {};
//     if (dto.title) where.title = dto.title;
//     if (dto.categoryId) where.category = { id: dto.categoryId };
//     if (dto.page) where.$page = dto.page;
//     if (dto.limit) where.$perPage = dto.limit;

//     return this.postrepo.pagedAsync(where);
//   }
// }
