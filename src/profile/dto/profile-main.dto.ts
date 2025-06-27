import { AutoMap } from "@automapper/classes";
import { IsOptional } from "class-validator";
import { UserMainDto } from "src/user/dto/user-main.dto";

export class ProfileMainDto {
  @AutoMap()
  id: number;

  @AutoMap()
  @IsOptional()
  bio: string;

    @AutoMap()
    user: UserMainDto;
}
