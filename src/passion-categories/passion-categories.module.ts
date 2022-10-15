import { Module } from '@nestjs/common';
import { PassionCategoriesService } from './passion-categories.service';
import { PassionCategoriesController } from './passion-categories.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { passionCategoryProviders } from './passion-categories.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PassionCategoriesController],
  providers: [PassionCategoriesService, ...passionCategoryProviders],
})
export class PassionCategoriesModule {}
