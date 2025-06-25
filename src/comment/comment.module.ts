import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { CommentRepo } from './repositories/comment.repo';
import { CreateCommentService } from './service/create-comment.service';
import { FindAllCommentService } from './service/find-all-comment.service';
import { FindOneCommentService } from './service/find-one-comment.service';
import { UpdateCommentService } from './service/update-comment.service';
import { DeleteCommentService } from './service/delete-comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [CommentController],
  providers: [CommentRepo, CreateCommentService, FindAllCommentService, FindOneCommentService, UpdateCommentService, DeleteCommentService],
  exports: [CommentRepo]
})
export class CommentModule {}
