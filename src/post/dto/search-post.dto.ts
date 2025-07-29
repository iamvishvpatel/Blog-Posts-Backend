import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class SearchPostDto {
  @IsOptional()
  @ApiProperty({example: ''})
  @IsString()
  title?: string;

  @IsOptional()
  @ApiProperty({example: '5'})
  categoryId?: number;

  @IsOptional()
  @ApiProperty({example: [2, 4]})
  tagIds?: number[];
  
  @IsOptional()
  @ApiProperty({example: '1'})
  @IsNumber()
  page:number = 1;

  @IsOptional()
  @IsNumber()
  @ApiProperty({example: '5'})
  limit: number = 10;

}
 