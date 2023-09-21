import { Test, TestingModule } from '@nestjs/testing';
import { MqttService } from './mqtt.service';
import { ConfigModule } from '../config/config.module';

describe('MqttService', () => {
  let service: MqttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MqttService],
      imports: [ConfigModule],
      exports: [MqttService]
    }).compile();

    service = module.get<MqttService>(MqttService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
