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



export class  PostMainDto {
  @AutoMap()
  @ApiProperty({example: 20})
  id: number;

  @AutoMap()
  @ApiProperty({example: 'Updated NestJS Auth Post.'})
  title: string;

  @AutoMap()
  @ApiProperty({example: 'This is the Updated body of the post'})
  content: string;

  @AutoMap()
  @ApiProperty({ type: () => UserMainDto, example: 10 })
  author: UserMainDto;

  @AutoMap()
  @ApiProperty({ type: () => CategoryMainDto, example: 2 })
  category: CategoryMainDto;

  @AutoMap()
  @ApiProperty({ type: () => [TagMainDto], example: [1, 3] })
  tags: TagMainDto[];

  @AutoMap()
  @ApiProperty({ type: () => [CommentMainDto] })
  comments: CommentMainDto[];

  @ApiProperty()
  @AutoMap()
  createdAt: Date;

  @ApiProperty()
  @AutoMap()
  updatedAt: Date;

  @ApiProperty()
  @AutoMap()
  updatedBy?: UserMainDto;
}
