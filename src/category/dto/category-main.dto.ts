
import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PostMainDto } from "src/post/dto/post-main.dto";
import { ProfileMainDto } from "src/profile/dto/profile-main.dto";

export class CategoryMainDto {
  @AutoMap()
  @ApiProperty()
  id: number;

  @AutoMap()
  @ApiProperty()
  name: string;

  @AutoMap()
  @ApiProperty({type: () => ProfileMainDto})
  posts: PostMainDto[]
}
