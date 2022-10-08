import { UNIVERSITY_REPOSITORY } from 'src/core/constants';
import { University } from './university.entity';

export const universitiesProviders = [
	{
		provide: UNIVERSITY_REPOSITORY,
		useValue: University,
	},
];