import { Inject, Injectable } from '@nestjs/common';
import { SKILL_REPOSITORY } from 'src/core/constants';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './skill.entity';
import { Job } from 'src/jobs/job.entity';

@Injectable()
export class SkillsService {
  constructor(
    @Inject(SKILL_REPOSITORY) private readonly skillRepository: typeof Skill,
  ) {}

  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    return this.skillRepository.create({ ...createSkillDto });
  }

  async findAll(): Promise<Skill[]> {
    return this.skillRepository.findAll({
      include: {
        model: Job,
      },
    });
  }

  async findOne(id: string): Promise<Skill> {
    return this.skillRepository.findOne({
      where: {
        id,
      },
      include: {
        model: Job,
      },
    });
  }

  async update(id: string, updateSkillDto: UpdateSkillDto): Promise<Skill> {
    const skill = await this.findOne(id);
    return skill.update({ ...updateSkillDto });
  }

  async remove(id: string): Promise<void> {
    const skill = await this.findOne(id);
    await skill.destroy();
  }
}
