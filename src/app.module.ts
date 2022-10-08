import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { PassionCategoriesModule } from './passion-categories/passion-categories.module';
import { PassionModule } from './passion/passion.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),
    JobsModule,
    PassionCategoriesModule,
    PassionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
