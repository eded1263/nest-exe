import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';
import config from './files/config.dev';
describe('ConfigService', () => {
  let service: ConfigService;
  const OLD_ENV = process.env;

  beforeEach(async () => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService]
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw if the current environment is not valid', () => {
    expect(() => service.getConfig()).toThrowError('Invalid environment');
  });

  it('should return a configuration object', () => {
    process.env.NODE_ENV = 'dev';
    expect(service.getConfig()).toBe(config);
  });
});
