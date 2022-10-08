import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseController } from './courses.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { courseProviders } from './courses.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CourseController],
  providers: [CoursesService, ...courseProviders]
})
export class CoursesModule {}
