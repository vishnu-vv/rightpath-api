import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Job } from "./entities/job.entity";

@Module({
  imports: [SequelizeModule.forFeature([Job])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
