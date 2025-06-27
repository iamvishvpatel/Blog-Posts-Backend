import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class AssignPermissionsDto {
  @ApiProperty({ example: [1, 3, 5], description: 'Array of permission IDs to assign to role' })
  @IsArray()
  @IsNumber({}, { each: true })
  permissionIds: number[];
}
