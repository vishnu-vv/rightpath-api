import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { PassionCategoriesModule } from './passion-categories/passion-categories.module';
import { PassionsModule } from './passions/passions.module';
import { UniversitiesModule } from './universities/universities.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),
    JobsModule,
    PassionsModule,
    PassionCategoriesModule,
    UniversitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
