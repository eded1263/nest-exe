import { Injectable } from '@nestjs/common';
import DevConfig from './files/config.dev';
import ProdConfig from './files/config.prod';
import QAConfig from './files/config.qa';
import { IConfig } from './interfaces/config.interface';
@Injectable()
export class ConfigService {
  private config = {
    dev: DevConfig,
    prod: ProdConfig,
    qa: QAConfig
  };

  getConfig(): IConfig {
    const config = this.config[process.env.NODE_ENV];
    if (!config) {
      throw new Error('Invalid environment');
    }
    return config;
  }
}
