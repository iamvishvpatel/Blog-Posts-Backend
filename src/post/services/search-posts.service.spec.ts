import { Test, TestingModule } from '@nestjs/testing';
import { SearchPostsService } from './search-posts.service';

describe('SearchPostsService', () => {
  let service: SearchPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchPostsService],
    }).compile();

    service = module.get<SearchPostsService>(SearchPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
