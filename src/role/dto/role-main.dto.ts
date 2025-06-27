import { AutoMap } from '@automapper/classes';
import { PermissionMainDto } from './permission-main.dto';

export class RoleMainDto {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  description?: string;

  @AutoMap(()=> [PermissionMainDto])
  permissions: PermissionMainDto[]

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}
