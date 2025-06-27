import { AutoMap } from '@automapper/classes';
import { PermissionMainDto } from './permission-main.dto';
import { UserMainDto } from 'src/user/dto/user-main.dto';

export class RoleMainDto {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  description?: string;
    @AutoMap()
    users: UserMainDto[];

  @AutoMap(()=> [PermissionMainDto])
  permissions: PermissionMainDto[]

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
