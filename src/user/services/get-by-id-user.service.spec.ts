import { Test, TestingModule } from '@nestjs/testing';
import { GetByIdUserService } from './get-by-id-user.service';

describe('GetByIdUserService', () => {
  let service: GetByIdUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetByIdUserService],
    }).compile();

    service = module.get<GetByIdUserService>(GetByIdUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
