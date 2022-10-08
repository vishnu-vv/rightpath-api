import { Module } from '@nestjs/common';
import { PassionsService } from './passions.service';
import { PassionController } from './passions.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { passionProviders } from './passions.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PassionController],
  providers: [PassionsService, ...passionProviders]
})
export class PassionsModule {}
