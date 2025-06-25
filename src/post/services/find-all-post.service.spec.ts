import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPostService } from './find-all-post.service';

describe('FindAllPostService', () => {
  let service: FindAllPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllPostService],
    }).compile();

    service = module.get<FindAllPostService>(FindAllPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
