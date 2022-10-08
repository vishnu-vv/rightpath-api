import { Inject, Injectable } from '@nestjs/common';
import { UNIVERSITY_REPOSITORY } from 'src/core/constants';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { University } from './university.entity';

@Injectable()
export class UniversitiesService {
  constructor(@Inject(UNIVERSITY_REPOSITORY) private readonly universityRepository: typeof University) { }

  async create(createUniversityDto: CreateUniversityDto): Promise<University> {
    return this.universityRepository.create({ ...createUniversityDto });
  }

  async findAll(): Promise<University[]> {
    return this.universityRepository.findAll();
  }

  async findOne(id: string): Promise<University> {
    return this.universityRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateUniversityDto: UpdateUniversityDto): Promise<University> {
    const university = await this.findOne(id);
    return university.update({ ...updateUniversityDto });
  }

  async remove(id: string): Promise<void> {
    const university = await this.findOne(id);
    await university.destroy();
  }

}