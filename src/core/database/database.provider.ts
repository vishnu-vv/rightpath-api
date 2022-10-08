import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { SEQUELIZE } from '../constants';
import { DatabaseConfig } from './database.config';

// Models or Entities
import { Job } from 'src/jobs/job.entity';
import { Passion } from 'src/passion/passion.entity';
import { PassionCategory } from 'src/passion-categories/passion-category.entity';

export const databaseProviders = [
	{
		provide: SEQUELIZE,
		useFactory: async () => {
			const config: SequelizeOptions = DatabaseConfig() as unknown as SequelizeOptions;
			const sequelize = new Sequelize(config);
			sequelize.addModels([Job, Passion, PassionCategory]);
			await sequelize.sync();
			return sequelize;
		},
	},
];