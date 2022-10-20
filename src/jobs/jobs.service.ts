import { Inject, Injectable } from '@nestjs/common';
import { JOB_REPOSITORY } from 'src/core/constants';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './job.entity';
import { Skill } from 'src/skills/skill.entity';
import { Course } from 'src/courses/course.entity';
import { Op } from 'sequelize';

@Injectable()
export class JobsService {
  constructor(
    @Inject(JOB_REPOSITORY) private readonly jobRepository: typeof Job,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    return this.jobRepository.create({ ...createJobDto });
  }

  async findAll({ salaryMin, salaryMax, skills }): Promise<Job[]> {
    let query = {
      where: {},
      include: [
        {
          model: Skill,
        },
        {
          model: Course,
        },
      ],
    }

    if (salaryMin) {
      query.where = {
        ...query.where,
        salaryMin: {
          [Op.gte]: parseInt(salaryMin)
        }
      }
    }

    if (salaryMax) {
      query.where = {
        ...query.where,
        salaryMax: {
          [Op.lte]: parseInt(salaryMax)
        }
      }
    }

    if (skills) {
      query.include = query.include.map((data) => data.model === Skill ? {
        model: Skill, where: {
          id: {
            [Op.or]: skills.split(',')
          }
        }
      } : data);
    };

    return this.jobRepository.findAll(query);
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
