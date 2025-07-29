import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { PostMainDto } from 'src/post/dto/post-main.dto';
import { UserMainDto } from 'src/user/dto/user-main.dto';

export class  CommentMainDto {

  @AutoMap()
  id?: number;

  @AutoMap()
  content: string;

  @AutoMap()
  userId: number

  @AutoMap()
  postId:number;

  @AutoMap(() => UserMainDto)
  user: UserMainDto;

  @AutoMap(() => PostMainDto)
  post: PostMainDto;
}
