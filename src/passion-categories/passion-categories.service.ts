import { Inject, Injectable } from '@nestjs/common';
import { PASSION_CATEGORY_REPOSITORY } from 'src/core/constants';
import { Passion } from 'src/passions/passion.entity';
import { CreatePassionCategoryDto } from './dto/create-passion-category.dto';
import { UpdatePassionCategoryDto } from './dto/update-passion-category.dto';
import { PassionCategory } from './passion-category.entity';

@Injectable()
export class PassionCategoriesService {
  constructor(
    @Inject(PASSION_CATEGORY_REPOSITORY)
    private readonly passionCategoryRepository: typeof PassionCategory,
  ) {}

  async create(
    createPassionCategoryDto: CreatePassionCategoryDto,
  ): Promise<PassionCategory> {
    return this.passionCategoryRepository.create({
      ...createPassionCategoryDto,
    });
  }

  async findAll(): Promise<PassionCategory[]> {
    return this.passionCategoryRepository.findAll({
      include: {
        model: Passion,
      },
    });
  }

  async findOne(id: number): Promise<PassionCategory> {
    return this.passionCategoryRepository.findOne({
      where: {
        id,
      },
      include: {
        model: Passion,
      },
    });
  }

  async update(
    id: number,
    updatePassionCategoryDto: UpdatePassionCategoryDto,
  ): Promise<PassionCategory> {
    const passionCategory = await this.findOne(id);
    return passionCategory.update({ ...updatePassionCategoryDto });
  }

  async remove(id: number): Promise<void> {
    const passionCategory = await this.findOne(id);
    return passionCategory.destroy();
  }
}
