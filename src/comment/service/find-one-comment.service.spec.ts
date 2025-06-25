import { Test, TestingModule } from '@nestjs/testing';
import { FindOneCommentService } from './find-one-comment.service';

describe('FindOneCommentService', () => {
  let service: FindOneCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneCommentService],
    }).compile();

    service = module.get<FindOneCommentService>(FindOneCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
