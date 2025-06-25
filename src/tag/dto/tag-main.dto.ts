// src/tag/dto/tag-main.dto.ts

import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class TagMainDto {
  @AutoMap()
  @ApiProperty()
  id: number;
  @AutoMap()
  @ApiProperty()
  name: string;
}
