import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { SEQUELIZE } from '../constants';
import { DatabaseConfig } from './database.config';

import { Job } from 'src/jobs/job.entity';

export const databaseProviders = [
	{
		provide: SEQUELIZE,
		useFactory: async () => {
			const config: SequelizeOptions = DatabaseConfig() as unknown as SequelizeOptions;
			const sequelize = new Sequelize(config);
			sequelize.addModels([Job]);
			await sequelize.sync();
			return sequelize;
		},
	},
];