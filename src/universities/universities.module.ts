import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesController } from './universities.controller';
import { universitiesProviders } from './universities.provider';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UniversitiesController],
  providers: [UniversitiesService, ...universitiesProviders],
})
export class UniversitiesModule {}
