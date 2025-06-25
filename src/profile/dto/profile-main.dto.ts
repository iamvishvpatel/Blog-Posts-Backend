import { AutoMap } from "@automapper/classes";
import { IsOptional } from "class-validator";

export class ProfileMainDto {
  @AutoMap()
  id: number;

  @AutoMap()
  @IsOptional()
  bio: string;
}
