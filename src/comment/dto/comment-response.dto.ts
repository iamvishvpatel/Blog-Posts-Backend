import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class CommentResponseDto {
  @AutoMap()
  id: number;

  @AutoMap()
  content: string;

  @AutoMap()
  user: string;

  @AutoMap()
  postId: number;
  
}
