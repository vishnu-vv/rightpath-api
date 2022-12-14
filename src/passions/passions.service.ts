import { Inject, Injectable } from '@nestjs/common';
import { PASSION_REPOSITORY } from 'src/core/constants';
import { CreatePassionDto } from './dto/create-passion.dto';
import { UpdatePassionDto } from './dto/update-passion.dto';
import { Passion } from './passion.entity';
import { Course } from 'src/courses/course.entity';

@Injectable()
export class PassionsService {
  constructor(
    @Inject(PASSION_REPOSITORY)
    private readonly passionRepository: typeof Passion,
  ) {}

  async create(createPassionDto: CreatePassionDto): Promise<Passion> {
    return this.passionRepository.create({ ...createPassionDto });
  }

  async findAll(): Promise<Passion[]> {
    return this.passionRepository.findAll({
      include: {
        model: Course,
      },
    });
  }

  async findOne(id: string): Promise<Passion> {
    return this.passionRepository.findOne({
      where: {
        id,
      },
      include: {
        model: Course,
      },
    });
  }

  async update(
    id: string,
    updatePassionDto: UpdatePassionDto,
  ): Promise<Passion> {
    const passion = await this.findOne(id);
    return passion.update({ ...updatePassionDto });
  }

  async remove(id: string): Promise<void> {
    const passion = await this.findOne(id);
    await passion.destroy();
  }
}
