import { PartialType } from '@nestjs/swagger';
import { CreatePassionCategoryDto } from './create-passion-category.dto';

export class UpdatePassionCategoryDto extends PartialType(
  CreatePassionCategoryDto,
) {}
