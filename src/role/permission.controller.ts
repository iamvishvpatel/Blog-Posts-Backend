import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('permissions')
@ApiTags('Permissions')
export class PermissionsController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new permission' })
  @ApiResponse({ status: 201, description: 'Permission created successfully' })
  create(@Body() createDto: CreatePermissionDto) {
    return this.permissionService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all permissions' })
  findAll() {
    return this.permissionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a permission by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Permission found' })
  @ApiResponse({ status: 404, description: 'Permission not found' })
  findOne(@Param('id') id: number) {
    return this.permissionService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a permission by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdatePermissionDto })
  @ApiResponse({ status: 200, description: 'Permission updated' })
  update(@Param('id') id: number, @Body() updateDto: UpdatePermissionDto){
    return this.permissionService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a permission by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Permission deleted successfully' })
  remove(@Param('id') id: number) {
    return this.permissionService.remove(id);
  }
}
