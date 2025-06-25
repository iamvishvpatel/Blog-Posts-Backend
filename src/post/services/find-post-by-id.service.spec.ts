import { Test, TestingModule } from '@nestjs/testing';
import { FindPostByIdService } from './find-post-by-id.service';

describe('FindPostByIdService', () => {
  let service: FindPostByIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindPostByIdService],
    }).compile();

    service = module.get<FindPostByIdService>(FindPostByIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
