import { PASSION_CATEGORY_REPOSITORY } from 'src/core/constants';
import { PassionCategory } from './passion-category.entity';

export const passionCategoryProviders = [
  {
    provide: PASSION_CATEGORY_REPOSITORY,
    useValue: PassionCategory,
  },
];
