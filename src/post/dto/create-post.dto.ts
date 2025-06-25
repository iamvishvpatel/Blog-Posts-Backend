import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
  @AutoMap()
  @ApiProperty({example:  "Nest Practice"})
  @IsString()
  @IsNotEmpty()
  title: string;

  @AutoMap()
  @ApiProperty({ description: 'Author user ID', example: '2' })
  @IsInt()
  @IsOptional()
  authorId: number;

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty({ type: [Number], description: 'Array of tag IDs', example: [2,3] })
  @IsArray()
  tagIds: number[];

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty({ type: [Number], description: 'Array of comment IDs', example: [5,7] })
  @IsArray()
  commentIds: number[];

  @AutoMap()
  @ApiProperty({ description: 'Category ID', example: '4' })
  @IsInt()
  @IsNotEmpty()
  categoryId: number;
}

