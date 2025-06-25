import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';
import { Tag } from 'src/tag/entities/tag.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { PostProfile } from './profiles/automapper-post.profile';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { PostRepoService } from './repositories/post.repo';
import { UserModule } from 'src/user/user.module';
import { CategoryModule } from 'src/category/category.module';
import { TagModule } from 'src/tag/tag.module';
import { CreatePostService } from './services/create-post.service';
import { UpdatePostService } from './services/update-post.service';
import { DeletePostService } from './services/delete-post.service';
import { FindAllPostService } from './services/find-all-post.service';
import { FindPostByIdService } from './services/find-post-by-id.service';
import { SearchPostsService } from './services/search-posts.service';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile, Post, Comment, Tag, Category]),
    UserModule,
    CategoryModule,
    CommentModule,
    TagModule,
  ],
  controllers: [PostController],
  providers: [
    PostProfile,
    PostRepoService,
    CreatePostService,
    UpdatePostService,
    DeletePostService,
    FindAllPostService,
    FindPostByIdService,
    SearchPostsService,
  ],
})
export class PostModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('post');
  }
}
  