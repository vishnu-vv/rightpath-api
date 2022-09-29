import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel(Job)
    private jobModel: typeof Job,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    return this.jobModel.create({...createJobDto});
  }

  async findAll(): Promise<Job[]> {
    return this.jobModel.findAll();
  }

  async findOne(id: string): Promise<Job> {
    return this.jobModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateJobDto: UpdateJobDto): Promise<Job> {
    const job = await this.findOne(id);
    return job.update({...updateJobDto});
  }

  async remove(id: string): Promise<void> {
    const job = await this.findOne(id);
    await job.destroy();
  }
}