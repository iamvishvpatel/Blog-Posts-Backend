import { Test, TestingModule } from '@nestjs/testing';
import { CreatePostService } from './create-post.service';

describe('CreatePostService', () => {
  let service: CreatePostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatePostService],
    }).compile();

    service = module.get<CreatePostService>(CreatePostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
