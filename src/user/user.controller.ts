import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { userRepo } from './repositories/user.repo';
import { AuthGuard } from '@nestjs/passport';
import { GetByIdUserService } from './services/get-by-id-user.service';

@ApiTags('User')
@ApiBearerAuth()
@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly getByIdService: GetByIdUserService) {}


  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.getByIdService.getById(id);
  }
}