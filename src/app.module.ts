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
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
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
          resources: [Job,
            {
              resource: Course,
              options: {
                properties: {
                  duration: {
                    type: 'string',
                    availableValues: [
                      { label: 'Less than 1 year', value: 0 },
                      { label: '1 year', value: 1 },
                      { label: '2 years', value: 2 },
                      { label: '3 years', value: 3 },
                      { label: '4 years', value: 4 },
                      { label: 'More than 4 years', value: 5 },
                    ]
                  },
                },
              },
            }, Passion, PassionCategory, University, Skill],
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
export class AppModule { }
