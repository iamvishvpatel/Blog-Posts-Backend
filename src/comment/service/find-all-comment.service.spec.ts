import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCommentService } from './find-all-comment.service';

describe('FindAllCommentService', () => {
  let service: FindAllCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllCommentService],
    }).compile();

    service = module.get<FindAllCommentService>(FindAllCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
