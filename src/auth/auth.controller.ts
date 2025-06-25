import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/Register/register.dto';
import { LoginDto } from './dto/Login/login.dto';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginService: LoginService,
    private readonly registerService: RegisterService
  ) {}


  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiResponse({ status: 400, description: 'Email already exists' })
  async register(@Body() dto: RegisterDto) {
    return this.registerService.register(dto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Loged in a  user' })
  @ApiResponse({ status: 201, description: 'User Login successfully' })
  @ApiResponse({ status: 400, description: 'Invalid Crediantial. Try Again..' })
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.loginService.login(dto);
  }
}
