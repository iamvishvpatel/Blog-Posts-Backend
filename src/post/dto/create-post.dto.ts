import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsArray, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreatePostDto {

  @AutoMap()
  id?:number;

  @AutoMap()
  @ApiProperty({example:  "My First Blog Post"})
  @IsString()
  @IsNotEmpty()
  title: string;

  @AutoMap()
  @ApiProperty({example:  "This is the body of the post"})
  @IsString()
  @IsNotEmpty()
  content: string;

  @AutoMap()
  @ApiProperty({ description: 'Author user ID', example: '21' })
  @IsInt()
  @IsOptional()
  authorId: number;

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty({ type: [Number], description: 'Array of tag IDs', example: [2,3] })
  @IsArray()
  tagIds: number[];

  @AutoMap()
  @IsOptional()
  @ApiProperty({ type: [Number], description: 'Array of comment IDs', example: [5,7] })
  @IsArray()
  commentIds: number[];

  @AutoMap()
  @ApiProperty({ description: 'Category ID', example: '4' })
  @IsNumber()
  categoryId: number;
}

