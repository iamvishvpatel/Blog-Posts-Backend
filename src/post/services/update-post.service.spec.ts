import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePostService } from './update-post.service';

describe('UpdatePostService', () => {
  let service: UpdatePostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdatePostService],
    }).compile();

    service = module.get<UpdatePostService>(UpdatePostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
