import { Injectable, OnModuleInit } from '@nestjs/common';
import DevConfig from './files/config.dev';
import ProdConfig from './files/config.prod';
import QAConfig from './files/config.qa';
import { IConfig } from './interfaces/config.interface';
import { GUIDGeneratorResult } from './guid/interfaces/guid-genereator-result.interface';
import { GuidGenerator } from './guid/guid';
@Injectable()
export class ConfigService implements OnModuleInit {
  private config = {
    dev: DevConfig,
    prod: ProdConfig,
    qa: QAConfig
  };

  constructor(private readonly guidGenerator: GuidGenerator) {}

  private clientId: string;

  private guidGeneratorResult: GUIDGeneratorResult;

  async onModuleInit() {
    await this.startClientId();
  }

  getConfig(): IConfig {
    const config = this.config[process.env.NODE_ENV];
    if (!config) {
      throw new Error('Invalid environment');
    }
    return config;
  }

  getClientId() {
    return this.clientId;
  }

  getGuidGeneratorResult() {
    return this.guidGeneratorResult;
  }

  async startClientId() {
    if (this.clientId) {
      return Promise.resolve();
    }
    const result = await this.guidGenerator.generateGuid();
    this.guidGeneratorResult = result;
    this.clientId = result.gatewayId;
  }
}
