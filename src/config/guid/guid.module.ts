import { Module } from '@nestjs/common';
import { GuidGenerator } from './guid';

@Module({
  providers: [GuidGenerator],
  exports: [GuidGenerator]
})
export class GuidModule {}
