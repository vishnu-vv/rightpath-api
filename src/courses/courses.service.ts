import { Inject, Injectable } from '@nestjs/common';
import { COURSE_REPOSITORY } from 'src/core/constants';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './course.entity';
import { University } from 'src/universities/university.entity';
import { Passion } from 'src/passions/passion.entity';

@Injectable()
export class CoursesService {
  constructor(@Inject(COURSE_REPOSITORY) private readonly courseRepository: typeof Course) { }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    return this.courseRepository.create({ ...createCourseDto });
  }

  async findAll(): Promise<Course[]> {
    return this.courseRepository.findAll({
      include: [{
        model: Passion
      },
      {
        model: University
      }]
    });
  }

  async findOne(id: string): Promise<Course> {
    return this.courseRepository.findOne({
      where: {
        id,
      },
      include: [{
        model: Passion
      },
      {
        model: University,
      }],
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