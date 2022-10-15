import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import * as AdminJSSequelize from '@adminjs/sequelize';
import AdminJS from 'adminjs';
import { AdminModule } from '@adminjs/nestjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { JobsModule } from './jobs/jobs.module';
import { PassionCategoriesModule } from './passion-categories/passion-categories.module';
import { PassionsModule } from './passions/passions.module';
import { SkillsModule } from './skills/skills.module';
import { UniversitiesModule } from './universities/universities.module';

import { Job } from './jobs/job.entity';
import { Course } from './courses/course.entity';
import { Passion } from './passions/passion.entity';
import { PassionCategory } from './passion-categories/passion-category.entity';
import { University } from './universities/university.entity';
import { Skill } from './skills/skill.entity';

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

@Module({
  imports: [
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [Job, Course, Passion, PassionCategory, University, Skill],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret',
        },
      }),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    JobsModule,
    PassionsModule,
    PassionCategoriesModule,
    UniversitiesModule,
    CoursesModule,
    SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
