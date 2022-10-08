import { PASSION_REPOSITORY } from 'src/core/constants';
import { Passion } from './passion.entity';

export const passionProviders = [
	{
		provide: PASSION_REPOSITORY,
		useValue: Passion,
	},
];