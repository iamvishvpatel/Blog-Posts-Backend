import { Test, TestingModule } from '@nestjs/testing';
import { CreateCommentService } from './create-comment.service';

describe('CreateCommentService', () => {
  let service: CreateCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateCommentService],
    }).compile();

    service = module.get<CreateCommentService>(CreateCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
