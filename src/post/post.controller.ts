import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  ParseIntPipe,
  Put,
  Req,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TransformIntercepter } from 'src/interceptors/transform.interceptor';
import { SearchPostDto } from './dto/search-post.dto';
import { AuthGuard } from '@nestjs/passport';
import { CreatePostService } from './services/create-post.service';
import { UpdatePostService } from './services/update-post.service';
import { DeletePostService } from './services/delete-post.service';
import { FindPostByIdService } from './services/find-post-by-id.service';
import { SearchPostsService } from './services/search-posts.service';
import { FindAllPostService } from './services/find-all-post.service';
import { RolesGuard } from 'src/guards/roles.guard';
import { PermissionsGuard } from 'src/guards/permissions.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Permissions } from 'src/decorators/permissions.decorator';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
@ApiTags('Blog-Posts')
@Controller('post')
export class PostController {
  constructor(
    private readonly createPostService: CreatePostService,
    private readonly updatePostService: UpdatePostService,
    private readonly deletePostService: DeletePostService,
    private readonly findAllPostsService: FindAllPostService,
    private readonly findPostByIdService: FindPostByIdService,
    private readonly searchPostsService: SearchPostsService,
  ) {}

  @Post('create')
  @Roles('admin', 'user') //Admin & User: Create Post
  @Permissions('create_post')
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({ status: 201, description: 'Post created' })
  create(@Body() createPostDto: CreatePostDto) {
    return this.createPostService.create(createPostDto);
  }

  @Put('edit/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
  @Roles('admin', 'user') //Admin: Update Any Post
  @Permissions('update_post')
  @ApiOperation({ summary: 'Edit a post by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({
    type: UpdatePostDto,
    examples: {
      default: {
        value: {
          title: 'Updated Blog Title',
          authorId: 21,
          categoryId: 5,
          tagIds: [1, 3],
          commentIds: [5, 7]
        },
      },
    },
  })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreatePostDto, @Req() req: any) {
    return this.updatePostService.update(id, dto, req.user);
  }

   @Delete('delete/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard, PermissionsGuard)
  @Roles('admin', 'user')
  @Permissions('delete_post')
  @ApiResponse({ status: 200, description: 'Post deleted successfully' })
  @ApiResponse({ status: 500, description: 'Post not found' })
  @ApiOperation({ summary: 'Delete a post by ID' })
  remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.deletePostService.remove(id, req.user);
  }

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('manage_users')
  @Get('admin-only')
  getAdminData() {
    return {
      message: 'Only admins with manage_users permission can access this',
    };
  }

  @Get('list')
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, description: 'List of posts' })
  @UseInterceptors(TransformIntercepter) //apply interceptor
  findAll() {
    return this.findAllPostsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a post by ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findPostByIdService.findById(+id);
  }

  @Post('search')
  @ApiOperation({ summary: 'Search posts with filters & Pagination  ' })
  @ApiBody({ type: SearchPostDto })
  relationSearch(@Body() dto: SearchPostDto) {
    return this.searchPostsService.search(dto);
  }

  

 
}
