import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { jobsProviders } from './jobs.provider';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [JobsController],
  providers: [JobsService, ...jobsProviders],
})
export class JobsModule {}
