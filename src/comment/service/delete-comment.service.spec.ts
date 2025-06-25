import { Test, TestingModule } from '@nestjs/testing';
import { DeleteCommentService } from './delete-comment.service';

describe('DeleteCommentService', () => {
  let service: DeleteCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteCommentService],
    }).compile();

    service = module.get<DeleteCommentService>(DeleteCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
