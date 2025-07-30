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
import { permission } from 'process';
import { PermissionMainDto } from 'src/role/dto/permission-main.dto';
import { Permission } from 'src/role/entities/permission.entity';
import { Role } from 'src/role/entities/role.entity';
import { RoleMainDto } from 'src/role/dto/role-main.dto';
import { format } from 'path';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreatePostDto } from '../dto/create-post.dto';
import { CreatePermissionDto } from 'src/role/dto/create-permission.dto';
import { CreateRoleDto } from 'src/role/dto/create-role.dto';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';
import { UpdateCommentDto } from 'src/comment/dto/update-comment.dto';
import { UpdatePostDto } from '../dto/update-post.dto';

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
      createMap(mapper, Permission, PermissionMainDto);
      // createMap(mapper, Permission, PermissionMainDto);
      createMap(
        mapper,
        Role,
        RoleMainDto,
        forMember(
          (dto) => dto.permissions,
          mapFrom((src) => src.permissions),
        ),
      );
      createMap(mapper, Profile, ProfileMainDto);
      createMap(mapper, Category, CategoryMainDto);
      createMap(mapper, Tag, TagMainDto);
      createMap(mapper, CreateUserDto, UserMainDto,forMember(
          (dto) => dto.profile,
          mapFrom((src) => src.profile),
        ),);
      createMap(mapper, CreatePostDto, PostMainDto);
      createMap(mapper, UpdatePostDto, PostMainDto,forMember(
          (dto) => dto.id,
          mapFrom((src) => src.id),
        ), );
      createMap(mapper, CreatePermissionDto, PermissionMainDto)
      createMap(mapper, CreateRoleDto, RoleMainDto)
      createMap(mapper, CreateCommentDto, CommentMainDto)
      createMap(mapper, UpdateCommentDto, CommentMainDto)
      createMap(
        mapper,
        Comment,
        CommentMainDto,
        forMember(
          (dto) => dto.user,
          mapFrom((src) => src.user),
        ),
        forMember(
          (dto) => dto.post,
          mapFrom((src) => src.post),
        ),
      );
      createMap(
        mapper,
        Post,
        PostMainDto,
        forMember(
          (dto) => dto.content,
          mapFrom((src) => src.content),
        ),
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
        forMember(
          (dto) => dto.updatedBy,
          mapFrom((src) => src.updatedBy),
        ),
      );
    };
  }
}
