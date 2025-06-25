import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateCommentDto {
  @AutoMap()
  @ApiProperty({example: 'This is a test comment.'})
  @IsString()
  content: string;

  @AutoMap()
  @ApiProperty({example: 15})
  @IsInt()
  userId: number;

  @AutoMap()
  @ApiProperty({example: 31})
  @IsInt()
  postId: number;
}

