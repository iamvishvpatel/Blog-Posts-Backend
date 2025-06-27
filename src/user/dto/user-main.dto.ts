// src/user/dto/user-main.dto.ts

import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { CommentMainDto } from 'src/comment/dto/comment-main.dto';
import { PostMainDto } from 'src/post/dto/post-main.dto';
import { ProfileMainDto } from 'src/profile/dto/profile-main.dto';
import { RoleMainDto } from 'src/role/dto/role-main.dto';

export class UserMainDto {
  @AutoMap()
  @ApiProperty()
  id: number;

  @AutoMap()
  @ApiProperty()
  username: string;

  @AutoMap()
  @ApiProperty()
  email: string;

  @AutoMap()
  @ApiProperty()
  password: string;

  @AutoMap(()=> RoleMainDto)
  @ApiProperty()
  role: RoleMainDto;

  // @AutoMap()
  // @ApiProperty()
  // permissions?: { id: number; name: string }[];

  @AutoMap(()=> ProfileMainDto)
  @ApiProperty({ type: () => ProfileMainDto })
  profile: ProfileMainDto;

  @AutoMap()
  @ApiProperty({ type: () => PostMainDto })
  posts: PostMainDto[];

  @AutoMap()
  @ApiProperty({ type: () => CommentMainDto })
  comments: CommentMainDto[];

  @AutoMap()
  @ApiProperty()
  createdAt: Date;

  @AutoMap()
  @ApiProperty()
  updatedAt: Date;
}
