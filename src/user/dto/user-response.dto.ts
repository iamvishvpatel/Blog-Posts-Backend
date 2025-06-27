// src/user/dto/user-main.dto.ts

import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { CommentMainDto } from 'src/comment/dto/comment-main.dto';
import { PostMainDto } from 'src/post/dto/post-main.dto';
import { ProfileMainDto } from 'src/profile/dto/profile-main.dto';
import { RoleMainDto } from 'src/role/dto/role-main.dto';

export class UserResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  username: string;

  @AutoMap()
  email: string;

  @AutoMap()
  password: string;

  @AutoMap(()=> RoleMainDto)
  role:RoleMainDto

//  @AutoMap()
//   permissions?: { id: number; name: string }[];

  @AutoMap(()=> ProfileMainDto)
  profile: ProfileMainDto;

  @AutoMap()
  posts: PostMainDto[];

  @AutoMap()
  comments: CommentMainDto[];

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
