import { Test, TestingModule } from '@nestjs/testing';
import { FindByEmailUserService } from './find-by-email-user.service';

describe('FindByEmailUserService', () => {
  let service: FindByEmailUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByEmailUserService],
    }).compile();

    service = module.get<FindByEmailUserService>(FindByEmailUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
