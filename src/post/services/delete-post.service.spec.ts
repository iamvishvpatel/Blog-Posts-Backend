import { Test, TestingModule } from '@nestjs/testing';
import { DeletePostService } from './delete-post.service';

describe('DeletePostService', () => {
  let service: DeletePostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeletePostService],
    }).compile();

    service = module.get<DeletePostService>(DeletePostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
