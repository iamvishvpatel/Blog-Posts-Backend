import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { AssignPermissionsDto } from './dto/assign-permissions.dto';

@Controller('role')
@ApiTags('Roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new role' })
  @ApiResponse({ status: 201, description: 'Role created successfully' })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({ status: 200, description: 'List of all roles' })
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a role by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Role found' })
  @ApiResponse({ status: 404, description: 'Role not found' })
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a role by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateRoleDto })
  @ApiResponse({ status: 200, description: 'Role updated successfully' })
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a role by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Role deleted successfully' })
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }

  @Post(':id/assign-permissions')
  assignPermissions(
    @Param('id') roleId: number,
    @Body() body: AssignPermissionsDto,
  ) {
    return this.roleService.assignPermission(roleId, body.permissionIds);
  }
}
