import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillController } from './skills.controller';
import { DatabaseModule } from 'src/core/database/database.module';
import { skillProviders } from './skills.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [SkillController],
  providers: [SkillsService, ...skillProviders],
})
export class SkillsModule {}
