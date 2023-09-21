import { Test, TestingModule } from '@nestjs/testing';
import { GuidGenerator } from './guid';

describe('Guid', () => {
  let provider: GuidGenerator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuidGenerator]
    }).compile();

    provider = module.get<GuidGenerator>(GuidGenerator);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
