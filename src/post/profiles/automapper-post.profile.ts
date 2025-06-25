import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Post } from '../entities/post.entity';
import { PostMainDto } from '../dto/post-main.dto';
import { User } from 'src/user/entities/user.entity';
import { UserMainDto } from 'src/user/dto/user-main.dto';
import { Category } from 'src/category/entities/category.entity';
import { CategoryMainDto } from 'src/category/dto/category-main.dto';
import { Comment } from 'src/comment/entities/comment.entity';
import { CommentMainDto } from 'src/comment/dto/comment-main.dto';
import { Profile } from 'src/profile/entities/profile.entity';
import { ProfileMainDto } from 'src/profile/dto/profile-main.dto';
import { Tag } from 'src/tag/entities/tag.entity';
import { TagMainDto } from 'src/tag/dto/tag-main.dto';

@Injectable()
export class PostProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      // createMap(mapper, Post, PostResponseDto)
      createMap(mapper, User, UserMainDto);
      // createMap(mapper, Post, PostMainDto)
      createMap(mapper, Comment, CommentMainDto);
      createMap(mapper, Profile, ProfileMainDto);
      createMap(mapper, Category, CategoryMainDto);
      createMap(mapper, Tag, TagMainDto);

      createMap(
        mapper,
        Post,
        PostMainDto,
        forMember(
          (dto) => dto.author,
          mapFrom((src) => src.author),
        ),
        forMember(
          (dto) => dto.category,
          mapFrom((src) => src.category),
        ),
        forMember(
          (dto) => dto.tags,
          mapFrom((src) => src.tags),
        ),
        forMember(
          (dto) => dto.comments,
          mapFrom((src) => src.comments),
        ),
      );
    };
  }
}
