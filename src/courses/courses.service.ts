import { Inject, Injectable } from '@nestjs/common';
import { COURSE_REPOSITORY } from 'src/core/constants';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './course.entity';
import { University } from 'src/universities/university.entity';
import { Passion } from 'src/passions/passion.entity';
import { Job } from 'src/jobs/job.entity';
import { Skill } from 'src/skills/skill.entity';
import { Op } from 'sequelize';

@Injectable()
export class CoursesService {
  constructor(
    @Inject(COURSE_REPOSITORY) private readonly courseRepository: typeof Course,
  ) { }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    return this.courseRepository.create({ ...createCourseDto });
  }

  async findAll({ passionIds, universityIds, locations, durations }): Promise<Course[]> {
    let query = {
      where: {},
      include: [
        {
          model: University,
        },
        {
          model: Passion,
        },
        {
          model: Job,
          include: [Skill]
        },
      ],
    }

    if (passionIds) {
      query.where = {
        ...query.where,
        passionId: {
          [Op.or]: passionIds.split(',')
        }
      }
    }
    if (universityIds) {
      query.where = {
        ...query.where,
        universityId: {
          [Op.or]: universityIds.split(',')
        }
      }
    }
    if (locations) {
      query.include = query.include.map((data) => data.model === University ? {
        model: University, where: {
          location: {
            [Op.or]: locations.split(',')
          }
        }
      } : data);
    };
    if (durations) {
      query.where = {
        ...query.where,
        duration: {
          [Op.or]: durations.split(',')
        }
      }
    }

    return this.courseRepository.findAll(query);
  }

  async findOne(id: string): Promise<Course> {
    return this.courseRepository.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Passion,
        },
        {
          model: University,
        },
        {
          model: Job,
        },
      ],
    });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const course = await this.findOne(id);
    return course.update({ ...updateCourseDto });
  }

  async remove(id: string): Promise<void> {
    const course = await this.findOne(id);
    await course.destroy();
  }
}
