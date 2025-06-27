// import { CreateUserDto } from "src/user/dto/create-user.dto";

import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryMainDto } from "src/category/dto/category-main.dto";
import { CommentMainDto } from "src/comment/dto/comment-main.dto";
import { TagMainDto } from "src/tag/dto/tag-main.dto";
import { UserMainDto } from "src/user/dto/user-main.dto";

// export class PostMainDto{
//     id: number;
//     title: string;
//     author: CreateUserDto;
//     comments?: string[]
//     tags: string[];
//     category: string;

// }



export class PostResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  title: string;

  @AutoMap()
  author: UserMainDto;

  @AutoMap()
  category: CategoryMainDto;

  @AutoMap()
  tags: TagMainDto[];

  @AutoMap()
  comments: CommentMainDto[];


  @AutoMap()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  @AutoMap()
  updatedBy?: UserMainDto;
}
