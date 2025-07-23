import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CreateCommentService } from './service/create-comment.service';
import { FindAllCommentService } from './service/find-all-comment.service';
import { FindOneCommentService } from './service/find-one-comment.service';
import { UpdateCommentService } from './service/update-comment.service';
import { DeleteCommentService } from './service/delete-comment.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Comments')
@Controller('comment')
// @ApiBearerAuth()
// @UseGuards(AuthGuard('jwt'))
export class CommentController {
  constructor(private readonly createcommentService: CreateCommentService,
    private readonly findallcommentService: FindAllCommentService,
    private readonly findonecommentService: FindOneCommentService,
    private readonly updatecommentService: UpdateCommentService,
    private readonly deletecommentService: DeleteCommentService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new comment' })
  @ApiBody({ type: CreateCommentDto })
  @ApiResponse({ status: 201, description: 'comment was created.' })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.createcommentService.create(createCommentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all comments' })
  @ApiResponse({ status: 200, description: 'get all comments.' })
  findAll() {
    return this.findallcommentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a comment by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'get a comment.' })
  @ApiResponse({ status: 404, description: 'Comment not found.' })
  findOne(@Param('id') id: string) {
    return this.findonecommentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a comment by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateCommentDto })
  @ApiResponse({ status: 200, description: 'comment has been updated.' })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.updatecommentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a comment by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'comment has been deleted.' })
  remove(@Param('id') id: string) {
    return this.deletecommentService.remove(+id);
  }
}
