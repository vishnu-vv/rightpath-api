import { Module } from '@nestjs/common';
import { PassionService } from './passion.service';
import { PassionController } from './passion.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { passionProviders } from './passion.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PassionController],
  providers: [PassionService, ...passionProviders]
})
export class PassionModule {}
