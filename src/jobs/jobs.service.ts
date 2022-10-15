import { Inject, Injectable } from '@nestjs/common';
import { JOB_REPOSITORY } from 'src/core/constants';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './job.entity';
import { Skill } from 'src/skills/skill.entity';
import { Course } from 'src/courses/course.entity';

@Injectable()
export class JobsService {
  constructor(
    @Inject(JOB_REPOSITORY) private readonly jobRepository: typeof Job,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    return this.jobRepository.create({ ...createJobDto });
  }

  async findAll(): Promise<Job[]> {
    return this.jobRepository.findAll({
      include: [
        {
          model: Skill,
        },
        {
          model: Course,
        },
      ],
    });
  }

  async findOne(id: string): Promise<Job> {
    return this.jobRepository.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Skill,
        },
        {
          model: Course,
        },
      ],
    });
  }

  async update(id: string, updateJobDto: UpdateJobDto): Promise<Job> {
    const job = await this.findOne(id);
    return job.update({ ...updateJobDto });
  }

  async remove(id: string): Promise<void> {
    const job = await this.findOne(id);
    await job.destroy();
  }
}
