import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { GuidModule } from './guid/guid.module';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
  imports: [GuidModule]
})
export class ConfigModule {}
