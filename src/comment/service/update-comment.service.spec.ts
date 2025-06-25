import { Test, TestingModule } from '@nestjs/testing';
import { UpdateCommentService } from './update-comment.service';

describe('UpdateCommentService', () => {
  let service: UpdateCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateCommentService],
    }).compile();

    service = module.get<UpdateCommentService>(UpdateCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
