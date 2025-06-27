import { AutoMap } from '@automapper/classes';
import { RoleMainDto } from './role-main.dto';

export class PermissionMainDto {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  description?: string;

  @AutoMap(()=> [RoleMainDto])
  roles: RoleMainDto

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
